import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from './movies.entity';
import { Maintenance } from './maintenance.entity';

/**
 * This is a Theater entity class
 */
@Entity()
export class Theater extends Maintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @ApiProperty()
  @IsString()
  theaterName: string;

  @Column()
  @ApiProperty()
  @IsString()
  location: string;

  @Column()
  @ApiProperty()
  @IsString()
  rating: string;

  @Column()
  @ApiProperty()
  @IsInt()
  noOfScreens: number;

  @Column()
  @ApiProperty()
  @IsInt()
  boxPrice: number;

  @Column()
  @ApiProperty()
  @IsInt()
  balconyPrice: number;

  @Column()
  @ApiProperty()
  @IsInt()
  benchPrice: number;

  @Column()
  @ApiProperty()
  @IsString()
  description: string;

  @ManyToMany(() => Movie, (movie) => movie.theater, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  movie: Movie[];

  async addMovie(movie: Movie) {
    if (this.movie == null) {
      this.movie = new Array<Movie>();
    }
    return this.movie.push(movie);
  }
}
