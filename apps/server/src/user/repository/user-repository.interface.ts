
import { CreateUserDto } from "@/user/dto/create-user.dto";
import { User } from '@prisma/client';

export interface IUserRepository {
    create: (user: CreateUserDto) => Promise<User>
    findByEmail: (email: string) => Promise<User | null>
    findAll: () => Promise<User[]>
}