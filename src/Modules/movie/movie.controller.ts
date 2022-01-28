import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './../../Entities/movies.entity';
import { ApiTags } from '@nestjs/swagger';

/**
 * This is a movie controller
 */
@ApiTags('Movie Info')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  /**
   * This method is used to add movie
   * @param data
   * @returns
   */
  @Post('addMovie')
  async addMovie(@Body() data: Movie) {
    return await this.movieService.addMovie(data);
  }

  /**
   * This method is used to get movie by theater name
   * @param theaterName
   * @returns
   */
  @Get('findMovieByTheater/:theaterName')
  async getMovieByTheater(@Param('theaterName') theaterName: string) {
    return await this.movieService.getMovieByTheater(theaterName);
  }

  /**
   * This method is used to finsd movie by movie name
   * @param movieName
   * @returns
   */
  @Get('findMovie/:movieName')
  async findMovies(@Param('movieName') movieName: string) {
    return await this.movieService.findMovies(movieName);
  }

  /**
   * This method is used to delete a movie
   * @param movieName
   * @param theaterName
   * @returns
   */
  @Delete('deleteMovie/:movieName/:theaterName')
  async deleteMovie(
    @Param('movieName') movieName: string,
    @Param('theaterName') theaterName: string
  ) {
    return await this.movieService.deleteMovie(movieName, theaterName);
  }
}
