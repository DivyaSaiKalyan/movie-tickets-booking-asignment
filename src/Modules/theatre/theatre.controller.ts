import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TheatreService } from './theatre.service';
import { Theater } from './../../Entities/theater.entity';
/**
 * This is theater controller
 */
@ApiTags('Theater info')
@Controller('theatre')
export class TheatreController {
  constructor(private readonly theatreService: TheatreService) {}

  /**
   * add theater
   * @param data taken from user
   * @returns add theater to database
   */
  @Post('addTheater')
  async addTheater(@Body() data: Theater) {
    return await this.theatreService.addTheater(data);
  }
  /**
   * Find Theater
   * @param theaterName
   * @returns
   */
  @Get('findTheater/:theaterName')
  async findTheater(@Param('theaterName') theaterName: string) {
    return await this.theatreService.findTheater(theaterName);
  }

  /**
   * This method is used delete theater
   * @param theaterName
   * @returns
   */
  @Delete('deleteTheater/:theaterName')
  async deleteTheater(@Param('theaterName') theaterName: string) {
    return await this.theatreService.deleteTheater(theaterName);
  }
}
