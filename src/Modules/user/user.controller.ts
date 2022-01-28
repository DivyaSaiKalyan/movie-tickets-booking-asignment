import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  Res
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { User } from './../../Entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

/**
 * This is a user controller
 */
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * This method is used to register the user
   * @param data is taken from the user
   * @returns save the data in register entity
   */
  @Post('register')
  async createUser(@Body() data: User) {
    return await this.userService.registerUser(data);
  }

  /**
   * This method is used to login the user
   * @param data
   * @param response
   * @returns
   */
  @Post('login')
  async loginUser(
    @Body() data: LoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return await this.userService.loginUser(data, response);
  }

  /**
   * This method is used to delete the user
   * @param email
   * @returns
   */
  @Delete('deleteUser/:email')
  async deleteUser(@Param('email') email: string) {
    return await this.userService.deleteUser(email);
  }

  /**
   * This method is used to update a user
   * @param email
   * @param password
   * @returns
   */
  @Put('updateUser/:email/:password')
  async updateUser(
    @Param('email') email: string,
    @Param('password') password: string
  ) {
    return await this.userService.updateUser(email, password);
  }
}
