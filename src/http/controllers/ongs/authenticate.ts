import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaOngsRepository } from "@/repositories/prisma-ongs-repository";
import { AuthenticateUseCase } from "@/use-cases/authenticate";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {

    const authenticateBodySchema = z.object({
        
        email: z.string().email(),
        password: z.string(),

    })

    const { email, password} = authenticateBodySchema.parse(request.body)

    try{

        const ongsRepository = new PrismaOngsRepository()
        const authenticateUseCase = new AuthenticateUseCase(ongsRepository)

        const {ong} = await authenticateUseCase.execute({email, password})

        const token = await reply.jwtSign(
            {},
            {
                sign: {
                    sub: ong.id
                }
            }
        )

        return reply.status(200).send({token})

    }catch(err){
        throw new Error('Error of controller')
    }

}