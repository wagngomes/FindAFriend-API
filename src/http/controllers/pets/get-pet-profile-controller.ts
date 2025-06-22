import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetPetProfile } from "@/use-cases/factories/make-get-pet-profile";

export async function getPetProfile(request: FastifyRequest, reply: FastifyReply) {


    const getPetProfileParamsSchema = z.object({
        id: z.string()

    })

    const {id} = getPetProfileParamsSchema.parse(request.params)

    try{

        const getPetProfileUseCase = makeGetPetProfile()
        const petProfile = await getPetProfileUseCase.execute({id})

        return reply.status(200).send(petProfile)

    }catch(err){
        throw new Error('Error of controller')
    }   

}