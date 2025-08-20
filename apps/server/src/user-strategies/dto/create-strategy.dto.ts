import { Strategies } from "@/common/enums/strategies.enum"
import { IsEnum, IsNumber, IsString } from "class-validator"

export class CreateStrategyDto {
    @IsEnum(Strategies)
    strategy: Strategies
    @IsString()
    strategyId: string
    @IsNumber()
    userFk: number
}