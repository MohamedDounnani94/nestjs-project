import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { HumanService } from './human.service';
import IHuman from './human.interface';
import { HumanBodyRequestDto, HumanIdRequestDto } from './dto/'

@Controller('humans')
export class HumanController {
  constructor(private readonly humanService: HumanService) {}

  @Get('/')
  findAll(): Promise<IHuman[]> {
    return this.humanService.findAll();
  }

  @Post()
  create(@Body() humanBodyRequestDto: HumanBodyRequestDto ) {
    return this.humanService.create(humanBodyRequestDto)
  }

  @Get(':id')
  findOneById(@Param() humanIdRequestDto: HumanIdRequestDto): Promise<IHuman> {
    return this.humanService.findOneById(humanIdRequestDto.id)
  }

  @Delete(':id')
  deleteOneById(@Param() humanIdRequestDto: HumanIdRequestDto) {
    return this.humanService.deleteOneById(humanIdRequestDto.id)
  }

  @Patch(':id')
  updateById(@Param() humanIdRequestDto: HumanIdRequestDto, @Body() humanBodyRequestDto: HumanBodyRequestDto) {
    return this.humanService.updateById(humanIdRequestDto.id, humanBodyRequestDto)
  }
}