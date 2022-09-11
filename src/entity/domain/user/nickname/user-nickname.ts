export type TUserNickname = string

export class UserNickname {
  constructor(
    private readonly _value: TUserNickname
  ) {}

  public get value(): TUserNickname {
    return this._value;
  }
}
