import { UserModule } from '@/user/user.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserStrategiesModule } from '@/user-strategies/user-strategies.module';

@Module({
  providers: [
    AuthService,
    GoogleStrategy,
    JwtStrategy,
  ],
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '15d' },
    }),
    UserStrategiesModule,
  ],
  controllers: [AuthController]
})
export class AuthModule { }
