import { PetsRepository } from "@/repositories/petsRepository"
import { Pet } from "@prisma/client"

interface GetPetsByCityUseCaseRequest {
    city: string
}
interface GetPetsByCityUseCaseResponse {
    pet: Pet[]
}

export class GetPetsByCityUseCase {

    constructor(private petsRepository: PetsRepository){}

    async execute({city}: GetPetsByCityUseCaseRequest){


        const pets = await this.petsRepository.findByCity(city)

        if(!pets){
            return null
        }

        return {pets}

    }
}