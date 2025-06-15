import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaOngsRepository } from "@/repositories/prisma-ongs-repository";
import { RegisterUseCase } from "@/use-cases/register";

export async function register(request: FastifyRequest, reply: FastifyReply) {

    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        cep: z.string(),
        city: z.string(),
        address: z.string(),
        whatsapp: z.string(),
        password: z.string()
    })

    const { name, email, cep, city, address, whatsapp, password} = registerBodySchema.parse(request.body)

    try{

        const ongsRepository = new PrismaOngsRepository()
        const registerUseCase  = new RegisterUseCase(ongsRepository)

        await registerUseCase.execute({name, email, cep, city,  address, whatsapp, password})

    }catch(err){
        throw new Error('Error of controller')
    }

    return reply.status(201).send

}