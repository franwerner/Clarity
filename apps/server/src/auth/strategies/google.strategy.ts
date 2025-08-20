import { Strategies } from "@/common/enums/strategies.enum";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth2";
import { CreateUserStrategyDto } from "@/user-strategies/dto/create-user-strategy.dto";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
            scope: ['profile', 'email'],
        });
    }
    async validate(
        _accessToken: string,
        _refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const { id, name, emails, picture } = profile;

        const user: CreateUserStrategyDto = {
            strategy: {
                strategy: Strategies.GOOGLE,
                strategyId: id,
            },
            user: {
                email: emails[0].value,
                name: name.givenName,
                lastname: name.familyName,
                avatarUrl: picture,
            }
        }

        done(null, user)
    }
}
