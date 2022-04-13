import {
  FastifyInstance,
  FastifyPluginOptions,
  HookHandlerDoneFunction,
} from "fastify";

export const usersRoutes = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: HookHandlerDoneFunction,
) => {
  fastify.get("/me", async (request, reply) => {
    reply.send("Me as user");
  });

  fastify.post("/", async (request, reply) => {
    reply.send("Create user");
  });

  done();
};
