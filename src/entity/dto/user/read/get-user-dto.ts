import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty()
  id: string

  @ApiProperty()
  email: string

  @ApiProperty()
  password: string

  @ApiProperty()
  nickname: string
}
