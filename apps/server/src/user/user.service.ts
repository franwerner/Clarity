import { Injectable, NotFoundException } from '@nestjs/common';
import type { IUserRepository } from './repository/user-repository.interface';
import { Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject("UserRepository")
        private userRepository: IUserRepository) { }

    async findByEmail(email: string) {
        const user = await this.userRepository.findByEmail(email)
        if (!user) {
            throw new NotFoundException("User not found")
        }
        return user
    }

    findAll() {
        return this.userRepository.findAll()
    }

    async getOrCreate(user: CreateUserDto) {
        const findedUser = await this.findByEmail(user.email)
        if (!findedUser) {
            return await this.registerUser(user)
        }
        return findedUser
    }

    registerUser(user: CreateUserDto) {
        return this.userRepository.create(user)
    }

}
