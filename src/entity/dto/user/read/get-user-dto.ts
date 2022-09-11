import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty()
  @AutoMap()
  id: string

  @ApiProperty()
  @AutoMap()
  email: string

  @ApiProperty()
  @AutoMap()
  password: string

  @ApiProperty()
  @AutoMap()
  nickname: string
}
