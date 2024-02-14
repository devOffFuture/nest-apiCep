import { Test, TestingModule } from '@nestjs/testing';
import { ViaCepController } from './viacep.controller';
import { ViaCepService } from './viacep.service';

describe('AppController', () => {
  let ViaCepController: ViaCepController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ViaCepController],
      providers: [ViaCepService],
    }).compile();

    viaCepController = app.get<ViaCepController>(ViaCepController);
  });

});
