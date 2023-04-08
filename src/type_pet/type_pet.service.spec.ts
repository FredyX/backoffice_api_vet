import { Test, TestingModule } from '@nestjs/testing';
import { TypePetService } from './type_pet.service';

describe('TypePetService', () => {
  let service: TypePetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypePetService],
    }).compile();

    service = module.get<TypePetService>(TypePetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
