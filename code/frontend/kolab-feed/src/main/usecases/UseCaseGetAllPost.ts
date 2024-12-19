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
    IHttpPostQueryParams, 
} from '@/main/services'

const { 
    VITE_API_BASE_URL, 
} = import.meta.env


export async function UseCaseGetAllPost(queryParams?: IHttpPostQueryParams): Promise<IHttpResponse<IPost[]>> {

    const params: IHttpParams<IHttpPostQueryParams> = {
        baseURL: VITE_API_BASE_URL,
        url: '/posts',
        queryParams,
    }

    try {
        const httpInstance = AxiosHttpClient.getInstance(params)
        const httpClient = new HttpClient<IPost[], IHttpPostQueryParams>(httpInstance.httpClient)

        const serviceGetPost = new ServiceGetPost(params, httpClient)
        return await serviceGetPost.get() 
    } catch (error) {
        throw new Error(`${error}`)
    }
}
