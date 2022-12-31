import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  app.enableCors();

  await app.listen(3000);
  logger.log(`server is running in ${await app.getUrl()}`)
  
}
bootstrap();
