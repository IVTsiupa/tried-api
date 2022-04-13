import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { JWTToken, RefreshToken } from "./jwt";

type UserProps = {
  email: string;
  username: string;
  password: string;
  isEmailVerified?: boolean;
  accessToken?: JWTToken;
  refreshToken?: RefreshToken;
  lastLogin?: Date;
};

export class User extends AggregateRoot<UserProps> {}
