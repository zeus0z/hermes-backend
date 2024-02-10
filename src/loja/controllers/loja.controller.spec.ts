import { Test, TestingModule } from '@nestjs/testing';
import { ReadLojaController } from './read-loja.controller';

describe('LojaController', () => {
  let controller: ReadLojaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadLojaController],
    }).compile();

    controller = module.get<ReadLojaController>(ReadLojaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
