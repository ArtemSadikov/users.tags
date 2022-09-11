import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagDaoEntity } from '../../entity/dao/tag/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagDaoEntity])]
})
export class TagModule {}
