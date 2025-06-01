import { OngsRepositosy } from "@/repositories/ongs-repository"
import { hash } from "bcryptjs"

interface RegisterUseCaseRequest {

    name: string
    email: string
    cep: string
    address: string
    whatsapp: string
    password: string

}

export class RegisterUseCase {
    constructor(private ongsRepository: OngsRepositosy){}

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

        return { ong }

    }
}