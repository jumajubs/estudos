import { Props } from '../types';
import api from './api';

class Service {
  async get(nome: string): Promise<Props> {
    const { data } = await api.get(`${nome}`);
    return data;
  }
}

export default new Service();