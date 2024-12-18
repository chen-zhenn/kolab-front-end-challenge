import { IPost } from '@/domain/models'
import { 
    IHttpParams, 
    IHttpResponse,
    AxiosHttpClient,
    HttpClient,
} from '@/infra'

import { 
    ServiceGetPost, 
} from '@/main/services'

export function makePost() {

    async function getAll(): Promise<IHttpResponse<IPost[]>> {

        const params: IHttpParams = {
            baseURL:'https://jsonplaceholder.typicode.com',
            url: '/posts',
        }

        try {
            const httpInstance = AxiosHttpClient.getInstance(params)
            const httpClient = new HttpClient<IPost[]>(httpInstance.httpClient)
    
            const serviceGetPost = new ServiceGetPost(params, httpClient)
            return await serviceGetPost.get() 
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    return {
        getAll,
    }
}