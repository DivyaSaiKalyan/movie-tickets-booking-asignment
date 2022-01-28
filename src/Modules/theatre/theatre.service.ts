import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Theater } from './../../Entities/theater.entity';

/**
 * This is a theater service all business logics are avaliabale here
 */
@Injectable()
export class TheatreService {
  constructor(
    @InjectRepository(Theater)
    private readonly theaterRepository: Repository<Theater>
  ) {}

  /**
   * This method is used to add theater
   * @param data
   * @returns
   */
  async addTheater(data: Theater) {
    const theater = new Theater();
    theater.createdBy = data.theaterName;
    const newData = Object.assign(theater, data);
    return await this.theaterRepository.save(newData);
  }

  /**
   * This method is used to find a theater
   * @param theaterName
   * @returns
   */
  async findTheater(theaterName: string) {
    const getTheater = await this.theaterRepository.findOne({
      theaterName: theaterName
    });
    if (!getTheater) {
      throw new NotFoundException('Theater not found');
    }
    return getTheater;
  }

  /**
   * This method is used to delete a delete
   * @param theaterName
   * @returns
   */
  async deleteTheater(theaterName: string) {
    const getTheater = await this.theaterRepository.findOne({
      theaterName: theaterName
    });
    if (!getTheater) {
      throw new NotFoundException('Theater not found');
    }
    await this.theaterRepository.delete({ theaterName: theaterName });
    return 'deleted succsfully';
  }
}
