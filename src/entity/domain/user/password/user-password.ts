const MIN_LENGTH = 8;
const MUST_CONTAIN_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[a-zA-Z]).{8,}$/g

export type TUserPassword = string

export class UserPassword {
  constructor(
    private readonly _value: TUserPassword
  ) {
    if (_value.length < MIN_LENGTH) {
      throw new Error("Password must contain 8 symbols.")
    }

    if (!/[A-Z]/g.test(_value)) {
      throw new Error("Password must have at least one uppercase, lowercase and one digit.")
    }

    if (!/[a-z]/g.test(_value)) {
      throw new Error("Password must have at least one uppercase, lowercase and one digit.")
    }

    if (!/\d/g.test(_value)) {
      throw new Error("Password must have at least one uppercase, lowercase and one digit.")
    }
  }

  public get value(): TUserPassword {
    return this._value;
  }
}
