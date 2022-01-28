import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Theater } from './theater.entity';
import { Maintenance } from './maintenance.entity';
import { ApiProperty } from '@nestjs/swagger';

/**
 * This is a Movie entity class
 */
@Entity()
export class Movie extends Maintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  language: string;

  @Column()
  @ApiProperty()
  movieName: string;

  @Column()
  @ApiProperty()
  screenNumber: string;

  @Column()
  @ApiProperty()
  rating: string;

  @Column()
  @ApiProperty()
  theaterName: string;

  @ManyToMany(() => Theater, (theater) => theater.movie, {
    onDelete: 'CASCADE'
  })
  @JoinTable()
  theater: Theater[];

  async addTheater(theater: Theater) {
    if (this.theater == null) {
      this.theater = new Array<Theater>();
    }
    return this.theater.push(theater);
  }
}
