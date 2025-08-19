import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get(':email')
    findUserByEmail(@Param('email') email: string) {
        return this.userService.findByEmail(email)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }
}
