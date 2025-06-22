import { PrismaPetsRepository } from "@/repositories/prisma-pets-repository"
import { GetPetsByCityUseCase } from "../get-pets-by-city"


export function makeGetPetsByCity(){

    const petsRepository = new PrismaPetsRepository()
    const getPetsByCityUseCase = new GetPetsByCityUseCase(petsRepository)

    return getPetsByCityUseCase

}