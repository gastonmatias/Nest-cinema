import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // cada vez que se ejecute una ruta primero pasara x esta fx
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(4000);
}
bootstrap();
