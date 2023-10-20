import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
  @ApiProperty({ type: String, example: "First todo" })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ type: String, example: 1 })
  @IsNotEmpty()
  userId: number;
}
