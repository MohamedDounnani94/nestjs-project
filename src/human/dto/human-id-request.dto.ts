import { IsNotEmpty, IsNumberString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export default class HumanIdRequestDto {
  @ApiProperty({
    description: 'The id of a Human',
    minimum: 1,
    default: 1
  })
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}