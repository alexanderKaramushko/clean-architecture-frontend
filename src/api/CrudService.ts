import { AxiosRequestConfig } from 'axios';
import BaseService from './BaseService';

class CrudService<T> extends BaseService<T> {

  public async read(config?: AxiosRequestConfig): Promise<T | never> {
    try {
      const response = await this.get(config);

      return response.data;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw new Error(`Failed to get ${this.path}: ${(error as any).message}`);
    }
  }

}

export default CrudService;
