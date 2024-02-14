import { Controller, Get, Param } from '@nestjs/common';
import { ViaCepService } from './viacep.service';

@Controller('cep')
export class ViaCepController {
  constructor(private viaCepService: ViaCepService) {}

  @Get(':cep')
  async buscarEndereco(@Param('cep') cep: string): Promise<any> {
    return this.viaCepService.consultarCEP(cep);
  }
}