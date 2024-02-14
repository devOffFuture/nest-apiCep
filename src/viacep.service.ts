// viacep.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ViaCepService {
  async consultarCEP(cep: string): Promise<any> {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
