import { FastifyReply, FastifyRequest } from "fastify";

export abstract class BaseController {
  protected abstract execute(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void | unknown>;

  public async run(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    try {
      await this.execute(request, reply);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      console.log(err);
      this.fail(reply, "An unexpected error occurred");
    }
  }

  public static jsonResponse(
    reply: FastifyReply,
    code: number,
    message: string,
  ) {
    return reply.status(code).send({ message });
  }

  public ok<T>(reply: FastifyReply, dto?: T) {
    if (!!dto) {
      reply.type("application/json");
      return reply.status(200).send(dto);
    } else {
      return reply.status(200);
    }
  }

  public created(reply: FastifyReply) {
    return reply.status(201);
  }

  public clientError(reply: FastifyReply, message?: string) {
    return BaseController.jsonResponse(
      reply,
      400,
      message ? message : "Bad request",
    );
  }

  public unauthorized(reply: FastifyReply, message?: string) {
    return BaseController.jsonResponse(
      reply,
      401,
      message ? message : "Unauthorized",
    );
  }

  public fail(reply: FastifyReply, error: Error | string) {
    console.log(error);
    return reply.status(500).send({
      message: error.toString(),
    });
  }
}
