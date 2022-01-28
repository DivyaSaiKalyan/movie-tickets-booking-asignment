import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './Common/TypeOrm/typeorm.config';
import { TheatreModule } from './Modules/theatre/theatre.module';
import { MovieModule } from './Modules/movie/movie.module';
import { PaymentModule } from './Modules/payment/payment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: TypeOrmConfig.host,
      port: TypeOrmConfig.port,
      username: TypeOrmConfig.username,
      password: TypeOrmConfig.password,
      database: TypeOrmConfig.database,
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule,
    TheatreModule,
    MovieModule,
    PaymentModule
  ],

  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
