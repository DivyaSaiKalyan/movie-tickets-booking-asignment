import { Module } from '@nestjs/common';
import { TheatreController } from './theatre.controller';
import { TheatreService } from './theatre.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theater } from './../../Entities/theater.entity';
import { Movie } from './../../Entities/movies.entity';

/**
 * This is a theater module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Theater, Movie])],
  controllers: [TheatreController],
  providers: [TheatreService]
})
export class TheatreModule {}
