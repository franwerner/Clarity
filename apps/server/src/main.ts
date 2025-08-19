import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import swaggerConfig from 'config/swagger.config';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    validateCustomDecorators: true
  }))
  app.use(cookieParser())
  swaggerConfig(app)
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
