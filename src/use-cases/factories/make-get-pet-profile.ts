import { PrismaPetsRepository } from "@/repositories/prisma-pets-repository"
import { GetPetProfileUseCase } from "../get-pet-profile"


export function makeGetPetProfile(){
    
    const petsRepository = new PrismaPetsRepository()
    const getPetProfileUseCase = new GetPetProfileUseCase(petsRepository)

    return getPetProfileUseCase
}