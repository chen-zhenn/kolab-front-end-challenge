export interface IHttpParams {
    baseURL: string | any;
}

export interface IHttpResponse<T> {
    status: number;
    statusText: string;
    message: string;
    data: T;
}
