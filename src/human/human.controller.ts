import { Controller, Get, Param, Post, Body, Delete, Patch, Put } from '@nestjs/common';
import { HumanService } from './human.service';
import IHuman from './human.interface';
import { CreateHumanDto, FindByIdHumanDto } from './dto/'

@Controller('humans')
export class HumanController {
  constructor(private readonly humanService: HumanService) {}

  @Get('/')
  findAll(): Promise<IHuman[]> {
    return this.humanService.findAll();
  }

  @Post()
  create(@Body() createHumanDto: CreateHumanDto ) {
    return this.humanService.create(createHumanDto)
  }

  @Get(':id')
  findOneById(@Param() findByIdHumanDto: FindByIdHumanDto): Promise<IHuman> {
    return this.humanService.findOneById(findByIdHumanDto.id)
  }

  @Delete(':id')
  deleteOneById(@Param() FindByIdHumanDto: FindByIdHumanDto) {
    return 'delete method'
  }

  @Delete()
  deleteAll() {
    return 'delete all method'
  }

  @Patch(':id')
  updateById(@Param() FindByIdHumanDto: FindByIdHumanDto, @Body() body: CreateHumanDto) {
    return 'update method'
  }
}