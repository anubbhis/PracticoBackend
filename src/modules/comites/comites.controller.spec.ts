import { Test, TestingModule } from '@nestjs/testing';
import { ComitesController } from './comites.controller';

describe('ComitesController', () => {
  let controller: ComitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComitesController],
    }).compile();

    controller = module.get<ComitesController>(ComitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
