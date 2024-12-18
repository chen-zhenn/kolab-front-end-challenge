import { 
    IHttpResponse, 
    IHttpClient,
    IHttpParams
} from '../protocols'

export class HttpClient<T> implements IHttpClient<T> {

    constructor(private httpClient: any) {
        this.httpClient = httpClient
    }

    async get(params: IHttpParams): Promise<IHttpResponse<T>> {
        const url = `${params.baseURL}${params.url}`
        try {
            const response = await this.httpClient.get(url)
            return response 
        } catch (error) {
            console.log(error)
            throw new Error('Error fetching data')
        }
    }
}