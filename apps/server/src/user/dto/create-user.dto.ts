import { Strategies } from "@/common/enums/strategies.enum";
import { IsEmail, IsEnum, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    lastname: string;

    @IsString()
    avatarUrl: string;

    @IsEnum(Strategies)
    provider: Strategies;

    @IsString()
    providerId: string;

}