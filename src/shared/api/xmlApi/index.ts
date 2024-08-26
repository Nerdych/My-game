import {HttpService} from '../abstractApi';
import type {HttpRequestParams} from '../types';

class XMLApiService extends HttpService {
  private xhr: XMLHttpRequest;

  constructor() {
    super();
    this.xhr = new XMLHttpRequest();
  }

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
    const {method, body} = params;

    this.xhr.open(method, __API_URL__);
    this.xhr.send(JSON.stringify(body));
    this.xhr.responseType = 'json';

    const result = new Promise((resolve, reject) => {
      this.xhr.onload = () => {
        if (this.xhr.status !== 200) {
          reject(new Error(`Ошибка ${this.xhr.status}: ${this.xhr.statusText}`));
        } else {
          resolve(this.xhr.response);
        }
      };
    });

    return result as Result;
  }
}

export {XMLApiService};
