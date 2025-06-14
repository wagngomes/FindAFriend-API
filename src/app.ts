import fastify from "fastify";
import { ongsRouter } from "./http/controllers/ongs/routes";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env";
import { petsRouter } from "./http/controllers/pets/routes";

export const app = fastify()

app.register(fastifyJwt, {
    secret: env.JWT_SECRET
})

app.register(ongsRouter)
app.register(petsRouter)

