import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './../../Entities/movies.entity';
import { TheatreService } from './../theatre/theatre.service';
import { Theater } from './../../Entities/theater.entity';

/**
 * This is a movie module all configuration all avaliabale here
 */
@Module({
  imports: [TypeOrmModule.forFeature([Movie, Theater])],
  controllers: [MovieController],
  providers: [MovieService, TheatreService]
})
export class MovieModule {}
