import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypePetService } from './type_pet.service';
import { CreateTypePetDto } from './dto/create-type_pet.dto';
import { UpdateTypePetDto } from './dto/update-type_pet.dto';

@Controller('type-pet')
export class TypePetController {
  constructor(private readonly typePetService: TypePetService) {}

  @Post()
  create(@Body() createTypePetDto: CreateTypePetDto) {
    return this.typePetService.create(createTypePetDto);
  }

  @Get()
  findAll() {
    return this.typePetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typePetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypePetDto: UpdateTypePetDto) {
    return this.typePetService.update(+id, updateTypePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typePetService.remove(+id);
  }
}
