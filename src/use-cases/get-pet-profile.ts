import { PetsRepository } from "@/repositories/petsRepository"
import { Pet } from "@prisma/client"

interface GetPetProfileUseCaseRequest {
    id: string
}
interface GetPetProfileUseCaseResponse {
    pet: Pet
}

export class GetPetProfileUseCase {

    constructor(private petsRepository: PetsRepository){}

    async execute({id}: GetPetProfileUseCaseRequest){


        const petProfile = await this.petsRepository.findById(id)

        if(!petProfile){
            return null
        }

        return {petProfile}

    }
}