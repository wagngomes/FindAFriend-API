import { OngsRepository } from "@/repositories/ongsRepository"
import { Ong } from "@prisma/client"
import { hash } from "bcryptjs"

interface RegisterUseCaseRequest {
    name: string
    email: string
    cep: string
    address: string
    whatsapp: string
    password: string
}

interface RegisterUseCaseResponse {
    ong: Ong
}

export class RegisterUseCase {

    constructor(private ongsRepository: OngsRepository){}

    async execute({name, email, cep, address, whatsapp, password}: RegisterUseCaseRequest){

        const password_hash = await hash(password, 6)

        const ong = await this.ongsRepository.create({
            name,
            email,
            cep,
            address,
            whatsapp,
            password: password_hash
            
        })

        return {ong}

    }
}