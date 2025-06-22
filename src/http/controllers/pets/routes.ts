import { FastifyInstance } from "fastify";
import { createPet } from "./create-pet-controller";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { getPetProfile } from "./get-pet-profile-controller";
import { getPetByCity } from "./get-pet-by-city-controller";


export async function petsRouter(app: FastifyInstance) {

    app.post('/createPet',{onRequest: [verifyJWT]}, createPet)
    app.get('/getPetProfile/:id', getPetProfile)
    app.get('/pets', getPetByCity)

}