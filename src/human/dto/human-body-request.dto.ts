import { IsNotEmpty, IsString, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export default class HumanBodyRequestDto {

  @ApiProperty({
    description: 'The name of a Human',
    default: 'Mohamed'
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The lastname of a Human',
    default: 'Dounnani'
  })
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty({
    description: 'The age of a Human',
    minimum: 1,
    default: 26
  })
  @IsNotEmpty()
  @IsInt()
  age: number;

  @ApiProperty({
    description: 'The height of a Human in cm',
    minimum: 1,
    default: 183
  })
  @IsInt()
  height: number;

  @ApiProperty({
    description: 'The weight of a Human in kg',
    minimum: 1,
    default: 80
  })
  @IsInt()
  weight: number;

  @ApiProperty({
    description: 'The taxCode of a Human',
    default: 'ABCDGEDF'
  })
  @IsNotEmpty()
  @IsString()
  taxCode: string;
}