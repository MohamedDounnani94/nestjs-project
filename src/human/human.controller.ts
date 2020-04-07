import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { HumanService } from './human.service';
import IHuman from './human.interface';
import { HumanBodyRequestDto, HumanIdRequestDto } from './dto/'
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('humans')
export class HumanController {
  constructor(private readonly humanService: HumanService) {}

  @Get('/')
  @ApiResponse({ status: 200, description: 'List of all humans'})
  findAll(): Promise<IHuman[]> {
    return this.humanService.findAll();
  }

  @Post()
  @ApiBody({type: HumanBodyRequestDto})
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  create(@Body() humanBodyRequestDto: HumanBodyRequestDto ) {
    return this.humanService.create(humanBodyRequestDto)
  }

  @ApiParam(HumanIdRequestDto)
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Human instance'})
  findOneById(@Param() humanIdRequestDto: HumanIdRequestDto): Promise<IHuman> {
    return this.humanService.findOneById(humanIdRequestDto.id)
  }

  @ApiParam(HumanIdRequestDto)
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Resource id successfully deleted'})
  deleteOneById(@Param() humanIdRequestDto: HumanIdRequestDto) {
    return this.humanService.deleteOneById(humanIdRequestDto.id)
  }

  @ApiParam(HumanIdRequestDto)
  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Human instance updated'})
  updateById(@Param() humanIdRequestDto: HumanIdRequestDto, @Body() humanBodyRequestDto: HumanBodyRequestDto) {
    return this.humanService.updateById(humanIdRequestDto.id, humanBodyRequestDto)
  }
}