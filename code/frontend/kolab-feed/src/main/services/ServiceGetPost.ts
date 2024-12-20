import { 
    IPost, 
} from '@/domain/models'

import { 
    IHttpClient, 
    IHttpParams,
    IHttpResponse,
    HttpStatusCode, 
} from '@/infra'

import { 
    HttpStatusMessages,
    IHttpPostQueryParams, 
} from '@/main/services'

export class ServiceGetPost {
    constructor(
        readonly params: IHttpParams<IHttpPostQueryParams>,
        readonly httpClient: IHttpClient<IPost[], IHttpPostQueryParams>
    ) {
        if (!params || !httpClient) throw new Error()
        this.params = params
        this.httpClient = httpClient
    }

    async getAll(): Promise<IHttpResponse<IPost[]>> {

        const response = await this.httpClient.get(this.params)

        switch (response.status) {
            case HttpStatusCode.servererror:
                return { ...response,  message: HttpStatusMessages.servererror }
            case HttpStatusCode.badrequest:
                return { ...response, message: HttpStatusMessages.badrequest }
            case HttpStatusCode.success:
                return { ...response, message: 'Sucesso: Dados de Post obtido com Sucesso!' }
            default:
                throw new Error()
        }
    }

    async getData(){}
}