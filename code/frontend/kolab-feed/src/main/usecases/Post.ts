import { 
    IPost, 
} from '@/domain/models'

import { 
    IHttpParams, 
    IHttpResponse,
    AxiosHttpClient,
    HttpClient,
} from '@/infra'

import { 
    ServiceGetPost, 
} from '@/main/services'

const { 
    VITE_API_BASE_URL, 
} = import.meta.env

export function makePost() {

    async function getAll(): Promise<IHttpResponse<IPost[]>> {

        const params: IHttpParams = {
            baseURL: VITE_API_BASE_URL,
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