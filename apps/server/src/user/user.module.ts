import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import UserRepository from './repository/user.repository';

@Module({
  providers: [
    UserService,
    {
      provide: "UserRepository",
      useClass: UserRepository
    }
  ],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule { }
