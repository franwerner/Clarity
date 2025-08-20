import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@/common/decorators/user.decorator';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }


    @Get("test")
    @UseGuards(JwtAuthGuard)
    findUserById(@User() user: any) {
        return { message: "User", user }
    }


    @Get(':email')
    findUserByEmail(@Param('email') email: string) {
        return this.userService.findByEmail(email)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }
}
