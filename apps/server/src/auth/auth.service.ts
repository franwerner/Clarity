import { type IStrategyRepository } from '@/user-strategies/repository/strategy-repository.interface';
import { UserService } from '@/user/user.service';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserStrategyDto } from '../user-strategies/dto/create-user-strategy.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        @Inject("StrategyRepository") private strategyRepository: IStrategyRepository,
        private jwtService: JwtService
    ) { }

    private async createUserAndStrategy(dto: CreateUserStrategyDto) {
        const user = await this.userService.createIfNotExits(dto.user)
        await this.strategyRepository.create({
            ...dto.strategy,
            userFk: user.id,
        })
        return this.generateToken(user)
    }

    private generateToken(user: any) {
        const { id, email, avatarUrl, createdAt, lastname, name } = user
        const payload = { id, email, avatarUrl, createdAt, lastname, name }
        return { accessToken: this.jwtService.sign(payload) }
    }

    async signIn(dto: CreateUserStrategyDto) {
        const strategy = await this.strategyRepository.findByStrategy(dto.strategy)
        if (strategy) {
            const user = await this.userService.findById(strategy.userFk)
            return this.generateToken(user)
        }
        return this.createUserAndStrategy(dto);
    }

}
