import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeBreedService } from './type_breed.service';
import { CreateTypeBreedDto } from './dto/create-type_breed.dto';
import { UpdateTypeBreedDto } from './dto/update-type_breed.dto';

@Controller('type-breed')
export class TypeBreedController {
  constructor(private readonly typeBreedService: TypeBreedService) {}

  @Post()
  create(@Body() createTypeBreedDto: CreateTypeBreedDto) {
    return this.typeBreedService.create(createTypeBreedDto);
  }

  @Get()
  findAll() {
    return this.typeBreedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeBreedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeBreedDto: UpdateTypeBreedDto) {
    return this.typeBreedService.update(+id, updateTypeBreedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeBreedService.remove(+id);
  }
}
