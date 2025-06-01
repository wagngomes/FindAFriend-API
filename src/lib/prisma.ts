import { PrismaClient } from "@prisma/client";
import { env } from "../env";


export const prisma: PrismaClient = new PrismaClient({
    log: env.NODE_ENV === 'dev'? ['query'] : []
})