type UndefinedOrNull = undefined | null;
type ResultError = string | UndefinedOrNull;
type ResultValue<T> = T | UndefinedOrNull;

export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: ResultError;
  private readonly _value: ResultValue<T>;

  private constructor(
    isSuccess: boolean,
    error?: ResultError,
    value?: ResultValue<T>,
  ) {
    if (isSuccess && error) {
      throw new Error(
        "InvalidOperationError: a result cannot be successful and contain an error",
      );
    }

    if (!isSuccess && !error) {
      throw new Error(
        "InvalidOperationError: a failing result needs to contain an error message",
      );
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this._value = value;

    Object.freeze(this);
  }

  public getValue(): ResultValue<T> {
    if (!this.isSuccess) {
      throw new Error("Cannot retrieve the value from a failed result");
    }
    return this._value;
  }

  public static ok<U>(value?: ResultValue<U>): Result<U> {
    return new Result<U>(true, null, value);
  }

  public static fail<U>(error: ResultError): Result<U> {
    return new Result<U>(false, error, null);
  }

  public static combine(results: Result<any>[]): Result<any> {
    for (const result of results) {
      if (result.isFailure) return result;
    }
    return Result.ok<any>();
  }
}
