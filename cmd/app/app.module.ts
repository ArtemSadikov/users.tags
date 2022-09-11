import { Module } from '@nestjs/common';
import { DbModule } from 'src/common/db/db.module';
import { MapperModule } from 'src/common/mapper/mapper.module';
import { TagModule } from 'src/modules/tag/tag.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [
    DbModule,
    UserModule,
    TagModule,
    MapperModule,
  ],
})
export class AppModule {}
