import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from "@nestjs/config";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserStrategiesModule } from './user-strategies/user-strategies.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: "../.env",
    }),
    UserModule,
    AuthModule,
    UserStrategiesModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
