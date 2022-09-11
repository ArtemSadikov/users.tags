import { User } from 'src/entity/domain/user/user';
import { CreateUserUseCasePort } from 'src/port/user/in/use-case/create-user-use-case-port.interface';
import { CreateUserServicePort } from 'src/port/user/out/service/create-user-service-port.interface';

export const CreateUserUseCaseSymbol = Symbol.for('CreateUserUseCase')

export class CreateUserUseCase implements CreateUserUseCasePort {
  constructor(
    private readonly _createUserServicePort: CreateUserServicePort
  ) {}


  create(data: User): Promise<User> {
    return this._createUserServicePort.create(data);
  }
}
