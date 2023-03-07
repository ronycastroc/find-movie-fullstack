import { Module } from '@nestjs/common';
import { MoviesController } from 'src/controllers/movie.controller';
import { MoviesService } from 'src/services/movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
