import { createMap, forMember, ignore, mapFrom, MappingConfiguration, MappingProfile } from '@automapper/core';
import type { Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/domain/user/user';
import { CreateUserDto } from 'src/entity/dto/user/create/create-user-dto';
import { GetUserDto } from 'src/entity/dto/user/read/get-user-dto';
import { UserDaoEntity } from 'src/entity/dao/user/user.entity';

@Injectable()
export class UserFromEntityMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper)
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, User, CreateUserDto,
        forMember(
          (d) => d.password,
          ignore()
        )
      );
      createMap(mapper, User, GetUserDto, 
        forMember(
          (d) => d.password,
          ignore()
        )
      );
      createMap(mapper, User, UserDaoEntity,
        forMember(
          d => d.password,
          mapFrom(u => u.password.value)
        )
      );
    }
  }

  protected get mappingConfigurations(): MappingConfiguration<User, any>[] {
    return [
        forMember(
          d => d.uid,
          mapFrom(u => u.id)
        ),
        forMember(
          d => d.email,
          mapFrom(u => u.email.value)
        ),
        forMember(
          d => d.nickname,
          mapFrom(u => u.nickname.value)
        )
    ]
  }
}
