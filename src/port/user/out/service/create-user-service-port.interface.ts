import { User } from 'src/entity/domain/user/user';

export interface CreateUserServicePort {
  create(data: User): Promise<User>
}
