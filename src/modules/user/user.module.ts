import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDaoEntity } from './repository/postgres/dao/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserDaoEntity])]
})
export class UserModule {}
