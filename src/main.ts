import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";

// Main Function to Start the App
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser()); // To make Cookies Available
  app.enableCors({
      origin: 'http://localhost:8080', // FrontEnd Address
      credentials: true
  })  // For The Connection With FrontEnd
  
  await app.listen(3000);
}

bootstrap();
