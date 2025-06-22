import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetPetsByCity } from "@/use-cases/factories/make-get-pets-by-city";

export async function getPetByCity(request: FastifyRequest, reply: FastifyReply) {

    const getPetByCityProfileQuerySchema = z.object({
        city: z.string()

    })

    const {city} = getPetByCityProfileQuerySchema.parse(request.query)

    try{

        const getPetByCityUseCase = makeGetPetsByCity()

        const pets = await getPetByCityUseCase.execute({city})

        return reply.status(200).send(pets)

    }catch(err){
        throw new Error('Error of controller')
    }   

}