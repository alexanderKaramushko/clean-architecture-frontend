import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class BaseService<T> {

  public axios: AxiosInstance = axios.create({ baseURL: 'api' });
  protected path: string;

  constructor(path: string) {
    this.path = path;
  }

  protected async get(config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.get(this.path, config);
  }

}

export default BaseService;
