import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'usertag',
  password: 'qwerty',
  database: 'users_tags',
  migrations: [__dirname + '/../../../' + 'migrations/**/*.{js,ts}'],
  entities: ['src/modules/**/repository/postgres/dao/*.entity.{js,ts}'],
})
console.log(__dirname + '/../../../' + 'migrations/**/*.{js,ts}');
