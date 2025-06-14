import { Prisma, Ong } from "@prisma/client";
import { OngsRepository } from "./ongsRepository";
import { hash, randomUUID } from "node:crypto";


export class InMemoryOngsRepository implements OngsRepository {

    public ongs: Ong[] = []

    async create(data: Prisma.OngCreateInput) {

        const ong = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            cep: data.cep,
            address: data.address,
            whatsapp: data .whatsapp,
            password: data.password
        }

        this.ongs.push(ong)

        return ong

    }

    async findByEmail(email: string){

        const ong = this.ongs.find((item)=>{

            return item.email === email

        })

        if(!ong){
            throw new Error
        }

        return ong
        
    }


}