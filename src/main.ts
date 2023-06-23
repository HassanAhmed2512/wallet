import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Main Function to Start the App
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
