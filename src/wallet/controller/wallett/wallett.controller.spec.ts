import { Test, TestingModule } from '@nestjs/testing';
import { WallettController } from './wallett.controller';

describe('WallettController', () => {
  let controller: WallettController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WallettController],
    }).compile();

    controller = module.get<WallettController>(WallettController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
