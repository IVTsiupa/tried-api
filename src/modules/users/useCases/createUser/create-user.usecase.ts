import { UseCase } from "../../../../shared/core/usecase";
import { CreateUserDTO } from "./create-user.dto";

export class CreateUserUseCase
  implements UseCase<CreateUserDTO, CreateUserDTO>
{
  async execute(request: CreateUserDTO): Promise<CreateUserDTO> {
    return request;
  }
}
