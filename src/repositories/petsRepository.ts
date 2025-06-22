import { Pet, Prisma } from "@prisma/client";

export interface PetsRepository{

    create(data: Prisma.PetCreateInput): Promise<Pet>
    findById(id: string): Promise<Pet | null>
    findByCity(city: string): Promise<Pet[] | null>

}