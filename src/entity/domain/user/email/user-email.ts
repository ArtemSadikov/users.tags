export type TUserEmail = string

export class UserEmail {
  constructor(
    private readonly _value: TUserEmail
  ) {}

  public get value(): TUserEmail {
    return this._value;
  }
}
