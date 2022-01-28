import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

/**
 * This is a Payment entity class
 */
@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  theaterName: string;

  @Column()
  @ApiProperty()
  movieName: string;

  @Column()
  price: number;

  @Column()
  @ApiProperty()
  screenNo: string;

  @Column()
  @ApiProperty()
  noOfTickets: number;

  @Column()
  totalPrice: number;

  @Column()
  @ApiProperty()
  seatOption: string;

  @Column()
  userName: string;

  @ManyToOne(() => User, (user) => user.payment)
  user: User;
}
