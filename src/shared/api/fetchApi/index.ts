import {HttpService} from '../abstractApi';
import type {HttpRequestParams} from '../types';

class FetchApiService extends HttpService {
  public override async post<Result>(params?: HttpRequestParams): Promise<Result> {
    const requestParams: HttpRequestParams = {...params, method: 'POST'};
    return this.request(requestParams);
  }

  public override async get<Result>(params?: HttpRequestParams): Promise<Result> {
    const requestParams: HttpRequestParams = {...params, method: 'GET'};
    return this.request(requestParams);
  }

  public override async put<Result>(params?: HttpRequestParams): Promise<Result> {
    const requestParams: HttpRequestParams = {...params, method: 'PUT'};
    return this.request(requestParams);
  }

  public override async delete<Result>(params?: HttpRequestParams): Promise<Result> {
    const requestParams: HttpRequestParams = {...params, method: 'DELETE'};
    return this.request(requestParams);
  }

  public override async patch<Result>(params?: HttpRequestParams): Promise<Result> {
    const requestParams: HttpRequestParams = {...params, method: 'PATCH'};
    return this.request(requestParams);
  }

  private async request<Result>(params: HttpRequestParams) {
    const result = await fetch(__API_URL__, params);
    return result.json() as Result;
  }
}

export {FetchApiService};
