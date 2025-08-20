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

    async findById(id: number) {
        const user = await this.userRepository.findById(id)
        if (!user) {
            throw new NotFoundException("User not found")
        }
        return user
    }

    findAll() {
        return this.userRepository.findAll()
    }

    async createIfNotExits(user: CreateUserDto) {
        const userExists = await this.userRepository.findByEmail(user.email)
        if (userExists) return userExists
        return await this.userRepository.create(user)
    }


}
