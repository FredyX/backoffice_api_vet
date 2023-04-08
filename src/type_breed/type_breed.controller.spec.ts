import { Test, TestingModule } from '@nestjs/testing';
import { TypeBreedController } from './type_breed.controller';
import { TypeBreedService } from './type_breed.service';

describe('TypeBreedController', () => {
  let controller: TypeBreedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeBreedController],
      providers: [TypeBreedService],
    }).compile();

    controller = module.get<TypeBreedController>(TypeBreedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
