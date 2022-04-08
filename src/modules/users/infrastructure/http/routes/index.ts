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

  done();
};
