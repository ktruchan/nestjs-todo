import { IsString, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(3)
  readonly title!: string;

  @IsString()
  readonly description?: string;
}
