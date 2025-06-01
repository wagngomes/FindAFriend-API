import { FastifyInstance } from "fastify";
import { register } from "./register";

export async function ongsRouter(app: FastifyInstance) {

    app.post('/ongs', register)



}