import { CreateUserDto } from '@/user/dto/create-user.dto';
import { OmitType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateStrategyDto } from './create-strategy.dto';

export class CreateUserStrategyDto {
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;

    @ValidateNested()
    @Type(() => OmitType(CreateStrategyDto, ['userFk'] as const))
    strategy: Omit<CreateStrategyDto, 'userFk'>;
}