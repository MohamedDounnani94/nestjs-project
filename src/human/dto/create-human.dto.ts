import { IsNotEmpty, IsString, IsInt } from 'class-validator'

export default class CreateHumanDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsInt()
  height: number;

  @IsInt()
  weight: number;

  @IsNotEmpty()
  @IsString()
  taxCode: string;
}