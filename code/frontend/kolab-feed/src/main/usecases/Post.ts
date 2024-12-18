import { IPost } from '../../domain/models'
import { IHttpParams, IHttpResponse } from '../../infra/protocols'
import { AxiosHttpClient } from '../../infra/http/axios/AxiosHttpClient'
import { HttpClient } from '../../infra/http/HttpClient' 
import { ServiceGetPost } from '../services'

export default function makePost() {

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