
import { prisma } from "@/lib/prisma";
import { Ong, Prisma } from "@prisma/client";
import { OngsRepository } from "./ongsRepository"

export class PrismaOngsRepository implements OngsRepository{
    
    async findByEmail(email: string ){
        
        const ong = await prisma.ong.findFirst({
            where: {
                email
            }
        })

        return ong
    }

    async create(data: Prisma.OngCreateInput){
        
        const ong = await prisma.ong.create({
            data
        })

        return ong
    }
}