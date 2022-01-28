import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './../../Entities/payment.entity';
import { UserService } from './../user/user.service';
import { MovieService } from './../movie/movie.service';
import { TheatreService } from './../theatre/theatre.service';
import { User } from './../../Entities/user.entity';
import { Movie } from './../../Entities/movies.entity';
import { JwtServiceClass } from './../../Common/Providers/jwt.service';
import { Theater } from './../../Entities/theater.entity';

/**
 * This is a payment related module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Payment, User, Movie, Theater])],
  controllers: [PaymentController],
  providers: [
    PaymentService,
    UserService,
    MovieService,
    TheatreService,
    JwtServiceClass
  ]
})
export class PaymentModule {}
