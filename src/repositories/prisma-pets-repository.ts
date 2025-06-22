import { Prisma } from "@prisma/client";
import { PetsRepository } from "./petsRepository";
import { prisma } from "@/lib/prisma";

export class PrismaPetsRepository implements PetsRepository{

    async findByCity(city: string){
        
        const pets = await prisma.pet.findMany({
            where: {
                city,
            }
        })

        return pets
    }

    async create(data: Prisma.PetCreateInput){

        const pet = await prisma.pet.create({
            data: {
                name: data.name,
                about: data.about,
                city: data.city,
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

    async findById(id: string) {

        const pet = await prisma.pet.findUnique({
            where: {
                id
            },
            include: {
                ong: {
                    select: {
                        name: true,
                        address: true,
                        whatsapp: true,
                    }
                }
            }
        })
         
        return pet
    }
}