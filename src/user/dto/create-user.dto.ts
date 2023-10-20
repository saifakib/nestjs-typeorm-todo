import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
  @ApiProperty({ type: String, example: "Saif" })
  @IsNotEmpty()
  @IsString()
  username: string;
}
