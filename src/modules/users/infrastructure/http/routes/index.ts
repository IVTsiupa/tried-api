import {
  FastifyInstance,
  FastifyPluginOptions,
  HookHandlerDoneFunction,
} from "fastify";

import { createUserController } from "../../../useCases/createUser";

export const usersRoutes = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: HookHandlerDoneFunction,
) => {
  fastify.get("/me", async (request, reply) => {
    reply.send("Me as user");
  });

  fastify.post("/", async (request, reply) => {
    return createUserController.execute(request, reply);
  });

  done();
};
