import { NestFactory } from '@nestjs/core';
import { MoviesModule } from './modules/movie.module';

async function bootstrap() {
  const app = await NestFactory.create(MoviesModule);
  await app.listen(5000);
  console.log('Listening on 5000');
}
bootstrap();
