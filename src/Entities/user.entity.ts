import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Maintenance } from './maintenance.entity';
import { Payment } from './payment.entity';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');

/**
 * This is a user entity all user related columns are avaliable here
 */
@Entity()
export class User extends Maintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @ApiProperty()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  @ApiProperty()
  email: string;

  @Column({ unique: true })
  @IsString()
  @ApiProperty()
  phoneNumber: string;

  @Column()
  @IsString()
  @ApiProperty()
  password: string;

  @BeforeInsert()
  async strongPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToMany(() => Payment, (payment) => payment.user)
  payment: Payment[];

  async addPayment(payment: Payment) {
    if (this.payment == null) {
      this.payment = new Array<Payment>();
    } else {
      this.payment.push(payment);
    }
  }

  @BeforeUpdate()
  async UpdatePassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
