import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const port = 3000

async function server() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('Human CRUD API')
    .setDescription('Simple human crud api')
    .setVersion('1.0')
    .addTag('Humans')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(port, () => {
    console.log(`Server started at localhost:${port}`)
  });
}
server();
