import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  nickname: string

  @ApiProperty({
    required: true,
    type: String,
  })
  email: string

  @ApiProperty({
    required: true,
    type: String,
    minLength: 8,
    examples: ['Qwerty123']
  })
  password: string
}
