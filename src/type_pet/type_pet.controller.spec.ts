import { Test, TestingModule } from '@nestjs/testing';
import { TypePetController } from './type_pet.controller';
import { TypePetService } from './type_pet.service';

describe('TypePetController', () => {
  let controller: TypePetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypePetController],
      providers: [TypePetService],
    }).compile();

    controller = module.get<TypePetController>(TypePetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
