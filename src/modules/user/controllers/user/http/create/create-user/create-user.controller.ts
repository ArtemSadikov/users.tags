import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { UserEmail } from 'src/entity/domain/user/email/user-email';
import { UserNickname } from 'src/entity/domain/user/nickname/user-nickname';
import { UserPassword } from 'src/entity/domain/user/password/user-password';
import { User } from 'src/entity/domain/user/user';
import { CreateUserDto } from 'src/entity/dto/user/create/create-user-dto';
import { GetUserDto } from 'src/entity/dto/user/read/get-user-dto';
import { CreateUserUseCaseSymbol } from 'src/modules/user/use-case/create/create-user.use-case';
import { CreateUserUseCasePort } from 'src/port/user/in/use-case/create-user-use-case-port.interface';

@ApiTags('User')
@Controller('user')
export class CreateUserController {
  constructor(
    @Inject(CreateUserUseCaseSymbol)
    private readonly _createUserUseCasePort: CreateUserUseCasePort
  ) {}

  @Post('/')
  public async createUser(@Body() user: CreateUserDto) {
    const email = new UserEmail(user.email);
    const password = new UserPassword(user.password);
    const nickname = new UserNickname(user.nickname);
    const entity = User.createWithoutId(email, password, nickname);
    const resultEntity =  await this._createUserUseCasePort.create(entity);
    const result = new GetUserDto()
    result.id = resultEntity.id;
    result.email = resultEntity.email.value;
    result.password = resultEntity.password.value;
    result.nickname = resultEntity.nickname.value;
    return result;
  }
}
