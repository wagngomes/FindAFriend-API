import { Ong, Prisma } from "@prisma/client";

export interface OngsRepositosy {
    create(data: Prisma.OngCreateInput): Promise<Ong>
}