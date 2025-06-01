import fastify from "fastify";
import { ongsRouter } from "./http/controllers/ongs/routes";

export const app = fastify()

app.register(ongsRouter)

