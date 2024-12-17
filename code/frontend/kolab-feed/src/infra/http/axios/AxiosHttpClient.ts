import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
} from 'axios'

import { 
    IHttpParams, 
} from '../../protocols'

export class AxiosHttpClient {
    public httpClient: AxiosInstance
    public params: IHttpParams
    private static instance: AxiosHttpClient

    private constructor(params: IHttpParams) {
        this.params = params
        const { baseURL } = params
        this.httpClient = axios.create(baseURL)

        this.httpClient.interceptors.request.use(
            (config) => this.handleRequestSuccess(config),
            (error) => this.handleRequestError(error)
        )

        this.httpClient.interceptors.response.use(
            (response) => this.handleResponseSuccess(response),
            (error) => this.handleResponseError(error)
        )
    }
    
    private handleRequestSuccess(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
        return config
    }

    private handleRequestError(error:AxiosError): Promise<AxiosResponse | AxiosError | undefined> {
        return this.handleError(error)  
    }

    private handleResponseSuccess(response: AxiosResponse): AxiosResponse {
        return response
    }

    private handleResponseError(error: AxiosError): Promise<AxiosResponse | AxiosError | undefined> {
        return this.handleError(error)
    }

    private handleError(error: AxiosError): Promise<AxiosResponse | AxiosError | undefined> {
        if (error?.response) return Promise.reject(error.response)
        return Promise.reject(error)
    }

    static getInstance(params: IHttpParams):AxiosHttpClient {
        if (!AxiosHttpClient.instance) {
          this.instance = new AxiosHttpClient(params)
        }
        return this.instance
    }
}