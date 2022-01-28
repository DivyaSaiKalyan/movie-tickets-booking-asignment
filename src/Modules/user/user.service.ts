import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from 'express';
import { User } from './../../Entities/user.entity';
import { JwtServiceClass } from './../../Common/Providers/jwt.service';
import { LoginDto } from './dto/login.dto';
/**This bcrypt is used to hash the password */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');

/**
 * This is a user service all business logics are avaliabale here
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtserviceClass: JwtServiceClass
  ) {}

  /**
   * This method is used to register the user
   * @param data is taken from the user
   * @returns save the data in register entity
   */
  async registerUser(data: User) {
    const user = new User();
    user.createdBy = data.name;
    const userData = Object.assign(user, data);
    return await this.userRepository.save(userData);
  }

  /**
   * This method is used to login the user and generate the jwt token
   * @param data is teken from the user
   * @returns user without password
   */
  async loginUser(data: LoginDto, response: Response) {
    const getUser = await this.findUser(data.email);
    const match = await bcrypt.compare(data.password, getUser.password);
    if (!getUser || match == false) {
      throw new UnauthorizedException('incorrect credentials');
    }
    const jwt = this.jwtserviceClass.createJwtToken(getUser);
    response.cookie('jwt', jwt, { httpOnly: true });
    const { password, ...result } = getUser;
    return result;
  }

  /**
   * This method is used to delete a user
   * @param email
   * @returns
   */
  async deleteUser(email: string) {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    await this.userRepository.delete({ email: email });
    return 'succsfully deleted';
  }

  /**
   * This method is used to update a user password
   * @param email
   * @param password
   * @returns
   */
  async updateUser(email: string, password: string) {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    await this.userRepository.update({ email: email }, { password: password });
    return 'success';
  }

  /**
   * This method is used to find a user
   * @param email
   * @returns
   */
  async findUser(email: string) {
    const getUser = await this.userRepository.findOne({
      email: email
    });
    return getUser;
  }
}
