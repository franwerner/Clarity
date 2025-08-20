
import { CreateUserDto } from "@/user/dto/create-user.dto";
import { UserEntity } from "../user.entity";

export interface IUserRepository {
    create: (user: CreateUserDto) => Promise<UserEntity>
    findByEmail: (email: string) => Promise<UserEntity | null>
    findById: (id: number) => Promise<UserEntity | null>
    findAll: () => Promise<UserEntity[]>
}