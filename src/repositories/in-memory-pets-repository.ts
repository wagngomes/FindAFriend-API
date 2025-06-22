import { Prisma, Pet } from "@prisma/client";
import { PetsRepository } from "./petsRepository";
import { randomUUID } from "node:crypto";


export class InMemoryPetsRepository implements PetsRepository {

    public pets: Pet[] = []

    async create(data: Prisma.PetCreateInput) {

        const pet = {
            id: randomUUID(),
            name: data.name,
            about: data.about,
            city: data.city,
            age: data.age,
            size: data.size,
            energyLevel: data.energyLevel,
            independencyLevel: data.independencyLevel,
            environmentIdeal: data.environmentIdeal,
            imageURL: data.imageURL || '',
            adoptionRequirements: data.adoptionRequirements,
            ongId: "03a11022-5da9-4424-ad94-0b1e2054a20c"

        }

        this.pets.push(pet)

        return pet
    }
    async findById(id: string) {

        const petData = this.pets.find(pet => pet.id === id)


        if(!petData){
            return null
        }

        return petData

    }
    async findByCity(city: string) {

        const petDataComplete = this.pets.filter(pet => pet.city === city)

        if(!petDataComplete){
            return null
        }

        return petDataComplete
    }

}