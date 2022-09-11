import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'usertag',
  password: 'qwerty',
  database: 'users_tags',
  migrations: ['migrations/**/*.{js,ts}'],
  entities: ['src/modules/**/repository/postgres/dao/*.entity.{js,ts}'],
})
