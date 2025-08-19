
import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { IUserRepository } from "./user-repository.interface";

@Injectable()
class UserRepository implements IUserRepository {

    constructor(private db: DatabaseService) { }

    create(user: CreateUserDto) {
        return this.db.user.create({
            data: user
        })
    }

    findByEmail(email: string) {
        return this.db.user.findUnique({
            where: {
                email
            }
        })
    }

    findAll() {
        return this.db.user.findMany()
    }

}

export default UserRepository