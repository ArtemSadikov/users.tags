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
    private readonly _repository: Repository<UserDaoEntity>
  ) {}

  public async create(data: User): Promise<User> {
    const entity = new UserDaoEntity()
    entity.uid = data.id;
    entity.email = data.email.value;
    entity.password = data.password.value;
    entity.nickname = data.nickname.value;

    await this._repository.insert(entity);

    return data;
  }
}
