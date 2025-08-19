import { CreateUserDto } from '@/user/dto/create-user.dto';
import { UserService } from '@/user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async signIn(user: CreateUserDto) {
        const findedUser = await this.userService.getOrCreate(user)
        const payload = { id: findedUser.providerId, email: findedUser.email }
        return { accessToken: this.jwtService.sign(payload) }
    }

}
