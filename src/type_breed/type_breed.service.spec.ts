import { Test, TestingModule } from '@nestjs/testing';
import { TypeBreedService } from './type_breed.service';

describe('TypeBreedService', () => {
  let service: TypeBreedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeBreedService],
    }).compile();

    service = module.get<TypeBreedService>(TypeBreedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
