type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

type HttpRequestParams = {
  method: HttpMethod;
};

type HttpService = {
  [Key in Lowercase<HttpMethod>]: <Result>(params: HttpRequestParams) => Promise<Result>;
};

export type {HttpService, HttpRequestParams};
