import { User } from '@/common/decorators/user.decorator';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { Controller, Get, HttpStatus, Res, UseGuards } from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Get('google')
    @UseGuards(GoogleAuthGuard)
    async googleAuth(@Res() res: Response) {
        const clientId = process.env.GOOGLE_CLIENT_ID;
        const redirectUri = encodeURIComponent(process.env.GOOGLE_CALLBACK_URL as string);

        res.redirect(
            `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}`
        )
    }

    @Get('google/callback')
    @UseGuards(GoogleAuthGuard)
    async googleAuthCallback(@User() user: CreateUserDto, @Res() res: Response) {
        const token = await this.authService.signIn(user)
        res.cookie('jwt', token.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 24 * 60 * 60 * 1000,
        })
        res.sendStatus(HttpStatus.OK)
    }

}
