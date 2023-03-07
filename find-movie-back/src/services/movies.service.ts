import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MoviesService {
  async getMovieByTittle(title: string) {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${title}&plot=full&apikey=3e4dbc70`,
    );

    return response.data;
  }
}
