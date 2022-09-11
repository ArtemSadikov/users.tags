import { constructUsing, createMap, createMapper, forMember, ignore, mapFrom, MappingConfiguration, MappingProfile } from '@automapper/core';
import type { Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/domain/user/user';
import { CreateUserDto } from 'src/entity/dto/user/create/create-user-dto';
import { GetUserDto } from 'src/entity/dto/user/read/get-user-dto';
import e from 'express';
import { UserEmail } from 'src/entity/domain/user/email/user-email';
import { UserPassword } from 'src/entity/domain/user/password/user-password';
import { UserNickname } from 'src/entity/domain/user/nickname/user-nickname';
import { UserDaoEntity } from 'src/entity/dao/user/user.entity';

@Injectable()
export class UserFromDomainMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper)
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, CreateUserDto, User);
      createMap(mapper, UserDaoEntity, User);
    }
  }

  protected get mappingConfigurations(): MappingConfiguration<any, User>[] {
    return [
        constructUsing(
          u => User.createWithoutId(
            new UserEmail(u.email),
            new UserPassword(u.password),
            new UserNickname(u.nickname),
          )
        )
    ]
  }
}
