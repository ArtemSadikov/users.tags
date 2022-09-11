import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserDaoEntity {
  @PrimaryGeneratedColumn('uuid')
  uid: string

  @Column({ type: 'character varying', length: 100 })
  email: string

  @Column({ type: 'character varying', length: 100 })
  password: string

  @Column({ type: 'character varying', length: 30 })
  nickname: string
}
