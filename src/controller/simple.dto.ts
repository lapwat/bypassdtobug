import { IsNotEmpty } from 'class-validator';

export class SimpleDto {
  @IsNotEmpty()
  notEmpty: string;
}