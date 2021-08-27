import { CustomError } from "./custom-error";

export class ExistingEmailError extends CustomError {
  reason = "Email already in use";
  statusCode = 409;
  constructor() {
    super("Email already in use");
    Object.setPrototypeOf(this, ExistingEmailError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
