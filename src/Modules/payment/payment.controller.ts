import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { Payment } from './../../Entities/payment.entity';

/**
 * This is a payment controller
 */
@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  /**
   * This method is used to book tickets
   * @param data
   * @param email
   * @returns
   */
  @Post('bookingMovieTickets/:email')
  async bookingTickets(@Body() data: Payment, @Param('email') email: string) {
    return await this.paymentService.bookingTickets(data, email);
  }
}
