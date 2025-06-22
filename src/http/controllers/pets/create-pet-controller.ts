import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreatePet } from "@/use-cases/factories/make-create-pet";

export async function createPet(request: FastifyRequest, reply: FastifyReply) {


    const createPetBodySchema = z.object({
        name: z.string(),
        about: z.string(),
        city: z.string(),
        age: z.coerce.number(),
        size: z.enum(["small", "medium", "large"]),
        energyLevel: z.enum(["low", "medium", "high"]),
        independencyLevel: z.enum(["low", "medium", "high"]),
        environmentIdeal: z.enum(["small", "medium", "large", "indoor", "outdoor"]),
        imageURL: z.string(),
        adoptionRequirements: z.string()
    })

    const { name, about, city, adoptionRequirements, age, energyLevel, environmentIdeal, independencyLevel, size, imageURL } = createPetBodySchema.parse(request.body)

    try{

        const createPetUseCase  = makeCreatePet()

        await createPetUseCase.execute({
            name,
            about,
            city,
            adoptionRequirements,
            age,
            energyLevel,
            environmentIdeal,
            imageURL,
            independencyLevel,
            size,
            ongId: request.user.sub

        })

    }catch(err){
        throw new Error('Error of controller')
    }

    return reply.status(201).send()

}