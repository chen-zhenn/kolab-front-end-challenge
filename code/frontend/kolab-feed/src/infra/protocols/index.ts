export interface IHttpParams {
    baseURL: string | any;
    url?: string;
}

export interface IHttpResponse<T> {
    status: number;
    statusText: string;
    message: string;
    data: T;
}

export interface IHttpClient<T> {
    get: (params: IHttpParams) => Promise<IHttpResponse<T>>;
}
