import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from './../../Entities/user.entity';
import { JwtServiceClass } from './../../Common/Providers/jwt.service';
import { Payment } from './../../Entities/payment.entity';

/**
 * This is a user module all configurations are avaliabale here
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([User, Payment]),
    JwtModule.register({
      secret: 'secrect',
      signOptions: { expiresIn: '3h' }
    })
  ],
  controllers: [UserController],
  providers: [UserService, JwtServiceClass]
})
export class UserModule {}
