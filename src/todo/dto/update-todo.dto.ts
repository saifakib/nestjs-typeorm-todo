import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateTodoDto {
    @ApiProperty({ type: String, example: "First todo" })
    @IsOptional()
    @IsString()
    title: string;
  
    @ApiProperty({ type: Boolean, example: true })
    @IsOptional()
    complete: boolean;
}
