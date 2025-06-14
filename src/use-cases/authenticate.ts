import { OngsRepository } from "@/repositories/ongsRepository"
import { Ong } from "@prisma/client"
import { compare, hash } from "bcryptjs"

interface AuthenticateUseCaseRequest {
    email: string
    password: string

}
interface AuthenticateUseCaseResponse {

    ong: Ong

}

export class AuthenticateUseCase {

    constructor(private ongsRepository: OngsRepository){}

    async execute({email, password}: AuthenticateUseCaseRequest){


        const ong = await this.ongsRepository.findByEmail(email)

        if(!ong){
            throw new Error
        }

        const doesPasswormatches = await compare(password, ong.password)

        if(doesPasswormatches === false) {
            throw new Error
        }

        return { ong }


    }
}