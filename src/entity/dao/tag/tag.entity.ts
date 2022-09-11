import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tag' })
export class TagDaoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'uuid' })
  creator: string

  @Column({ type: 'character varying', length: 40 })
  name: string

  @Column({ type: 'int', default: 0, name: 'sort_order' })
  sortOrder: number
}
