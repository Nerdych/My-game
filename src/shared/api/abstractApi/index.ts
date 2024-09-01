import type {HttpRequestParams} from '../types';

abstract class HttpService {
  public abstract post<Result>(params?: HttpRequestParams): Promise<Result>;
  public abstract get<Result>(params?: HttpRequestParams): Promise<Result>;
  public abstract put<Result>(params?: HttpRequestParams): Promise<Result>;
  public abstract patch<Result>(params?: HttpRequestParams): Promise<Result>;
  public abstract delete<Result>(params?: HttpRequestParams): Promise<Result>;
}

export {HttpService};
