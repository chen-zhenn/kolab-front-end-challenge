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

export enum HttpStatusCode {
    success = 200,
    created = 201,
    badrequest = 400,
    notfound = 404,
    servererror = 500,
}