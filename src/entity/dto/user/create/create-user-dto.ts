import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @AutoMap()
  nickname: string

  @ApiProperty({
    required: true,
    type: String,
  })
  @AutoMap()
  email: string

  @ApiProperty({
    required: true,
    type: String,
    minLength: 8,
    examples: ['Qwerty123']
  })
  @AutoMap()
  password: string
}
