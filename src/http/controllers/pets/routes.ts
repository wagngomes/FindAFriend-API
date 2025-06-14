import { FastifyInstance } from "fastify";
import { createPet } from "./create-pet-controller";
import { verifyJWT } from "@/http/middlewares/verify-jwt";


export async function petsRouter(app: FastifyInstance) {

    app.post('/createPet',{onRequest: [verifyJWT]}, createPet)

}