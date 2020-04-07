import { IsNotEmpty, IsInt, IsNumberString } from 'class-validator'

export default class FindByIdHumanDto {
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}