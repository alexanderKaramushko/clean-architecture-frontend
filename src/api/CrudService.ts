import { AxiosRequestConfig } from 'axios';
import BaseService from './BaseService';

class CrudService<T> extends BaseService<T> {

  public async read(config?: AxiosRequestConfig): Promise<T | never> {
    try {
      const response = await this.get(config);

      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to get ${this.path}: ${error.message}`);
    }
  }

}

export default CrudService;
