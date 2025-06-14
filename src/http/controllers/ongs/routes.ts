import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";

export async function ongsRouter(app: FastifyInstance) {

    app.post('/ongs', register)
    app.post('/auth', authenticate)

}