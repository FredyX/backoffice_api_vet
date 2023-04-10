import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeServices } from './type-service.service';
import { CreateTypeServiceDto } from './dto/create-type-service.dto';
import { UpdateTypeServiceDto } from './dto/update-type-service.dto';

@Controller('type-service')
export class TypeServiceController {
  constructor(private readonly typeServices: TypeServices) {}

  @Post()
  async create(@Body() createTypeServiceDto: CreateTypeServiceDto) {
    return this.typeServices.create(createTypeServiceDto);
  }

  @Get()
  async findAll() {
    return await this.typeServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeServices.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeServiceDto: UpdateTypeServiceDto,
  ) {
    return this.typeServices.update(+id, updateTypeServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeServices.remove(+id);
  }
}
