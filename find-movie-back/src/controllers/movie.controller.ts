import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from '../services/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get(':title')
  async getMovie(@Param('title') title: string) {
    return this.moviesService.getMovieByTittle(title);
  }
}
