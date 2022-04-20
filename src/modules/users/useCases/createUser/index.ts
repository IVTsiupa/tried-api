import { CreateUserUseCase } from "./create-user.usecase";
import { CreateUserController } from "./create-user.controller";

export const createUserUseCase = new CreateUserUseCase();
export const createUserController = new CreateUserController(createUserUseCase);
