type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

type HttpRequestParams = {
  method: HttpMethod;
  body?: Record<string, unknown>;
};

type HttpService = {
  [Key in Lowercase<HttpMethod>]: <Result>(params: HttpRequestParams) => Promise<Result>;
};

export type {HttpService, HttpRequestParams};
