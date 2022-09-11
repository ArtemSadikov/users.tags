import { User } from 'src/entity/domain/user/user';

export interface CreateUserUseCasePort {
  create(data: User): Promise<User>
}
