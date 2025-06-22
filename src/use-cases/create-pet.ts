import { PetsRepository } from "@/repositories/petsRepository"
import { EnergyLevel, EnvironmentIdeal, IndependencyLevel, Size } from "@prisma/client"
import {} from '@fastify/jwt'


interface CreatePetUseCaseRequest {
    name: string
    about: string
    city: string
    age: number
    size: Size
    energyLevel: EnergyLevel
    independencyLevel: IndependencyLevel
    environmentIdeal: EnvironmentIdeal
    imageURL: string,
    adoptionRequirements: string
    ongId: string

}
export class CreatePetUseCase {
    constructor(public petsRepository: PetsRepository) { }

    async execute({ name, about, city, age, size, energyLevel, independencyLevel, environmentIdeal, imageURL, adoptionRequirements, ongId }: CreatePetUseCaseRequest) {

        const pet = await this.petsRepository.create({
            name,
            about,
            city,
            age,
            size,
            energyLevel,
            independencyLevel,
            environmentIdeal,
            imageURL,
            adoptionRequirements,
            ong: {
                connect: {
                    id: ongId
                }
            }
        })

        return pet
    }
}