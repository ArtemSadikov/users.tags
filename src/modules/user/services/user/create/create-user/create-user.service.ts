import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDaoEntity } from 'src/entity/dao/user/user.entity';
import { User } from 'src/entity/domain/user/user';
import { CreateUserServicePort } from 'src/port/user/out/service/create-user-service-port.interface';
import { Repository } from 'typeorm';

@Injectable()
export class CreateUserService
  implements CreateUserServicePort {
  constructor(
    @InjectRepository(UserDaoEntity)
    private readonly _repository: Repository<UserDaoEntity>,
    @InjectMapper()
    private readonly _mapper: Mapper
  ) {}

  public async create(data: User): Promise<User> {
    const entity = this._mapper.map(data, User, UserDaoEntity);
    const result = await this._repository.save(entity);
    return this._mapper.map(result, UserDaoEntity, User);
  }
}
