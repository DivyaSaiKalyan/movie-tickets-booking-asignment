import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './../user/user.service';
import { Payment } from './../../Entities/payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieService } from './../movie/movie.service';
import { TheatreService } from './../theatre/theatre.service';

/**
 * This is a payment service class all business logics are avaliable here
 */
@Injectable()
export class PaymentService {
  constructor(
    private readonly userService: UserService,
    private readonly movieService: MovieService,
    private readonly theatreService: TheatreService,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>
  ) {}

  /**
   * This method is used to book the tickets
   * @param data
   * @param email
   * @returns
   */
  async bookingTickets(data: Payment, email: string) {
    const getMovie = await this.movieService.findOneMovie(data.movieName);
    const getTheater = await this.theatreService.findTheater(data.theaterName);
    const getUser = await this.userService.findUser(email);
    if (!getMovie || !getTheater || !getUser) {
      throw new UnauthorizedException('incorrect details');
    }
    const payment = new Payment();
    if (data.seatOption == 'box') {
      payment.price = getTheater.boxPrice;
    } else if (data.seatOption == 'balcony') {
      payment.price = getTheater.balconyPrice;
    } else if (data.seatOption == 'bench') {
      payment.price = getTheater.balconyPrice;
    }
    payment.user = getUser;
    payment.totalPrice = data.noOfTickets * payment.price;
    payment.userName = getUser.email;
    const newData = Object.assign(payment, data);
    return await this.paymentRepository.save(newData);
  }
}
