import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect as ConnectToDB } from './database/connect-to-db';

async function bootstrap() {
  await ConnectToDB()
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
