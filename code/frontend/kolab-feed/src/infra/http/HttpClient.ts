import { 
    IHttpResponse, 
    IHttpClient,
    IHttpParams
} from '../protocols'

import { Utils } from '../utils'

export class HttpClient<T, Q> implements IHttpClient<T, Q> {

    constructor(private httpClient: any) {
        this.httpClient = httpClient
    }

    async get(params: IHttpParams<Q>): Promise<IHttpResponse<T>> {
        const url = this.buildURL(params)
        try {
            const response = await this.httpClient.get(url)
            return response 
        } catch (error) {
            console.log(error)
            throw new Error('Error fetching data')
        }
    }

    protected buildURL(params: IHttpParams<Q>){
        const url =  params?.queryParams ? 
            `${params.baseURL}${params.url}${Utils.serializeQueryParams(params.queryParams)}` : 
            `${params.baseURL}${params.url}`
        return url
    }

}