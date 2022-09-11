import { Mapper } from '@automapper/core';
import { InjectMapper, MapInterceptor } from '@automapper/nestjs';
import { Body, Controller, Inject, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
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
    private readonly _createUserUseCasePort: CreateUserUseCasePort,
    @InjectMapper()
    private readonly _mapper: Mapper
  ) {}

  @Post('/')
  @UseInterceptors(MapInterceptor(User, GetUserDto))
  public async createUser(@Body() user: CreateUserDto) {
    const entity = this._mapper.map(user, CreateUserDto, User);
    return await this._createUserUseCasePort.create(entity);
  }
}
