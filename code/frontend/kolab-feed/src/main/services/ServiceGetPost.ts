import { 
    IHttpClient, 
    IHttpParams,
    IHttpResponse,
    HttpStatusCode, 
} from '../../infra/protocols'

import { HttpStatusMessages } from './protocols'

export class ServiceGetPost<T> {
    constructor(
        readonly params: IHttpParams,
        readonly httpClient: IHttpClient<T>
    ) {
        this.params = params
        this.httpClient = httpClient
    }

    async get(): Promise<IHttpResponse<T> | undefined> {

        const response = await this.httpClient.get(this.params)

        switch (response.status) {
            case HttpStatusCode.servererror:
                return { ...response,  message: HttpStatusMessages.servererror }
            case HttpStatusCode.badrequest:
                return { ...response, message: HttpStatusMessages.badrequest }
            case HttpStatusCode.success:
                return { ...response, message: 'Sucesso: Dados de Post obtido com Sucesso!' }
            case HttpStatusCode.created:
                return { ...response, message: 'Sucesso: Post criado com Sucesso!' }
            default:
                throw new Error()
        }
    }
}