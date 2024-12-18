import { 
    IHttpResponse, 
    IHttpClient,
    IHttpParams
} from '../protocols'

export class HttpClient<T> implements IHttpClient<T> {

    constructor(private httpClient) {
        this.httpClient = httpClient
    }

    async get(params: IHttpParams): Promise<IHttpResponse<T>> {
        const { baseURL, url } = params
        const endpoint = `${baseURL}${url}`

        try {
            const response = await this.httpClient.get(endpoint)
            return response 
        } catch (error) {
            console.log(error)
            throw new Error('Error fetching data')
        }
    }
}