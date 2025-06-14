import { Prisma, Pet } from "@prisma/client";
import { PetsRepository } from "./petsRepository";
import { prisma } from "@/lib/prisma";

export class PrismaPetsRepository implements PetsRepository{

    async create(data: Prisma.PetCreateInput){

        const pet = await prisma.pet.create({
            data: {
                name: data.name,
                about: data.about,
                age: data.age,
                adoptionRequirements: data.adoptionRequirements,
                energyLevel: data.energyLevel,
                environmentIdeal: data.environmentIdeal,
                independencyLevel: data.independencyLevel,
                size: data.size,
                imageURL: data.imageURL,
                ong: data.ong
            }
        })

        return pet 
    }

}