import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor() {
        super({
            jwtFromRequest: (req: Request) => {
                return req.cookies.jwt
            },
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET as string,
        })
    }

    validate(payload: any) {
        return payload
    }
}