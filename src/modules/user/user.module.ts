import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDaoEntity } from '../../entity/dao/user/user.entity';
import { CreateUserUseCase, CreateUserUseCaseSymbol } from './use-case/create/create-user.use-case';
import { CreateUserService } from './services/user/create/create-user/create-user.service';
import { CreateUserController } from './controllers/user/http/create/create-user/create-user.controller';
import { UserFromEntityMapper } from 'src/common/mapper/user/user-from-entity.mapper';
import { UserFromDomainMapper } from 'src/common/mapper/user/user-from-domain.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([UserDaoEntity])],
  controllers: [CreateUserController],
  providers: [
    UserFromEntityMapper,
    UserFromDomainMapper,
    CreateUserService,
    {
      provide: CreateUserUseCaseSymbol,
      useFactory: (createUserService: CreateUserService) => {
        return new CreateUserUseCase(
          createUserService
        )
      },
      inject: [CreateUserService]
    },
  ],
})
export class UserModule {}
