import { ValueObject } from "../../../shared/domain/ValueObject";
import { Result } from "../../../shared/core/result";

export interface UserEmailProps {
  value: string;
}

export class UserEmail extends ValueObject<UserEmailProps> {
  private constructor(props: UserEmailProps) {
    super(props);
  }

  get value() {
    return this.properties.value;
  }

  private static format(email: string): string {
    return email.trim().toLowerCase();
  }

  private static isValidEmail(email: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  public static create(email: string): Result<UserEmail> {
    if (!this.isValidEmail(email)) {
      return Result.fail<UserEmail>("Email address not valid");
    } else {
      const createdEmail = new UserEmail({ value: this.format(email) });
      return Result.ok<UserEmail>(createdEmail);
    }
  }
}
