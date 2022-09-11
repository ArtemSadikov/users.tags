import { Module } from '@nestjs/common';
import { DbModule } from 'src/common/db/db.module';
import { TagModule } from 'src/modules/tag/tag.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [
    DbModule,
    UserModule,
    TagModule,
  ],
})
export class AppModule {}
