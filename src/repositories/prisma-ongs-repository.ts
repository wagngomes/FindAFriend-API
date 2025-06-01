
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { OngsRepositosy } from "./ongs-repository";

export class PrismaOngsRepository implements OngsRepositosy{

    async create(data: Prisma.OngCreateInput){
        
        const ong = await prisma.ong.create({
            data
        })

        return ong
    }
}