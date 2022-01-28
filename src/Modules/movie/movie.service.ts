import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './../../Entities/movies.entity';
import { TheatreService } from './../theatre/theatre.service';

/**
 * This is a movie service
 */
@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    private readonly theatreService: TheatreService
  ) {}

  /**
   * This method is used to add movie
   * @param data
   * @returns
   */
  async addMovie(data: Movie) {
    const getTheater = await this.theatreService.findTheater(data.theaterName);
    const movie = new Movie();
    if (!getTheater) {
      throw new NotFoundException('Theater not avaliable in register list');
    } else {
      movie.createdBy = data.theaterName;
      movie.addTheater(getTheater);
      const newData = Object.assign(movie, data);
      return await this.movieRepository.save(newData);
    }
  }

  /**
   * This method is used to get movie by theater
   * @param theaterName
   * @returns
   */
  async getMovieByTheater(theaterName: string) {
    const getMovie = await this.movieRepository.find({
      theaterName: theaterName
    });
    if (!getMovie) {
      throw new NotFoundException('Theater not found');
    }
    return getMovie;
  }

  /**
   * This method is used to find a movies
   * @param movieName
   * @returns
   */
  async findMovies(movieName: string) {
    const getMovie = await this.movieRepository.find({ movieName: movieName });
    if (!getMovie) {
      throw new NotFoundException('movie is not avaliable in the list');
    }
    return getMovie;
  }

  /**
   * This method is used to find one movie
   */
  async findOneMovie(movieName: string) {
    const getMovie = await this.movieRepository.findOne({
      movieName: movieName
    });
    if (!getMovie) {
      throw new NotFoundException('movie is not avaliable in the list');
    }
    return getMovie;
  }

  /**
   * This method is used to delete a movie
   * @param movieName
   * @param theaterName
   * @returns
   */
  async deleteMovie(movieName: string, theaterName: string) {
    const getMovie = await this.movieRepository.findOne({
      movieName: movieName,
      theaterName: theaterName
    });
    if (!getMovie) {
      throw new NotFoundException('movie or theater not found');
    }
    await this.movieRepository.delete({
      movieName: getMovie.movieName,
      theaterName: getMovie.theaterName
    });
    return 'movie deleted succsfully';
  }
}
