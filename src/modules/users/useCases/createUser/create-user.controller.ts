import { BaseController } from "../../../../shared/infrastructure/http/base-controller";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserUseCase } from "./create-user.usecase";
import { CreateUserDTO } from "./create-user.dto";

export class CreateUserController extends BaseController {
  private useCase: CreateUserUseCase;

  constructor(useCase: CreateUserUseCase) {
    super();
    this.useCase = useCase;
  }

  async execute(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void | unknown> {
    const { username, email, password } = request.body as CreateUserDTO;
    const dto: CreateUserDTO = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const user = await this.useCase.execute(dto);
      return this.ok(reply, user);
    } catch (error) {
      if (error instanceof Error) {
        return this.fail(reply, error);
      }
    }
  }
}
