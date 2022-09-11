import { AutoMap } from '@automapper/classes';
import { randomUUID } from 'crypto';
import { UserEmail } from './email/user-email';
import { UserNickname } from './nickname/user-nickname';
import { UserPassword } from './password/user-password';

export type UserId = string

export class User {
  constructor(
    private readonly _id: UserId,
    private readonly _email: UserEmail,
    private readonly _password: UserPassword,
    private readonly _nickname: UserNickname,
  ) {}

  static createWithoutId(
    email: UserEmail,
    password: UserPassword,
    nickname: UserNickname,
  ): User {
    const id = randomUUID();
    return new User(
      id,
      email,
      password,
      nickname
    )
  }

  public get nickname(): UserNickname {
    return this._nickname;
  }

  public get password(): UserPassword {
    return this._password;
  }

  public get email(): UserEmail {
    return this._email;
  }

  public get id(): UserId {
    return this._id;
  }
}
