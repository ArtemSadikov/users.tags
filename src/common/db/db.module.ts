import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'usertag',
        password: 'qwerty',
        database: 'users_tags',
        logging: 'all',
        logger: 'advanced-console',
      }),
    })
  ],
})
export class DbModule {}
