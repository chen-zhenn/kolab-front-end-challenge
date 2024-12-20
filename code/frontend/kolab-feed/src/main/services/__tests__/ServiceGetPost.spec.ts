import { 
    describe, 
    it, 
    expect,
    beforeEach,
    vi,
} from 'vitest'

import { 
    IPost, 
} from '@/domain/models'

import {  
    IHttpParams,
    IHttpResponse,
    HttpStatusCode,
    AxiosHttpClient,
    HttpClient
} from '@/infra'

import { 
    HttpStatusMessages,
    ServiceGetPost,
    IHttpPostQueryParams, 
} from '@/main/services'

describe('Service Post', () => {

    const params: IHttpParams<IHttpPostQueryParams> = {
        baseURL:'baseURL',
        url: '/resource',
        queryParams: { userId: 1 }
    }

    const httpInstance = AxiosHttpClient.getInstance(params)
    const httpClient = new HttpClient<IPost[], IHttpPostQueryParams>(httpInstance.httpClient)

    describe('Get Post', () => {

        describe('Smoke Test', () => {

            let serviceGetPost = new ServiceGetPost(params, httpClient) 

            it('Should return an constructor Error', () => {
                serviceGetPost = () => ServiceGetPost()
                expect(serviceGetPost).toThrowError()
            })
    
            it('Should return an error if parameters are missing in the constructor', () => {
                serviceGetPost = () => new ServiceGetPost()
                expect(serviceGetPost).toThrowError()
            })
    
            it('Should return a instance of ServiceGetPost', () => {
                serviceGetPost = new ServiceGetPost(params, httpClient)
                expect(serviceGetPost).toBeInstanceOf(ServiceGetPost)
            })

            it('Should return an get attribute', () => {
                expect(serviceGetPost).toHaveProperty('getAll')
            })

            it('Should check if get attribute is a function', () => {
                expect(typeof serviceGetPost.getAll).toBe('function')
            })
        })

        describe('Response', () => {

            const mockResponse: IHttpResponse<IPost[]> = {
                status: HttpStatusCode.servererror,
                statusText: '',
                message: HttpStatusMessages.servererror,
                data: []
            }
            let serviceGetPost: ServiceGetPost

            beforeEach(() => {
                serviceGetPost = new ServiceGetPost(params, httpClient)
                serviceGetPost.get = vi.fn()
            })

            it(
                'should return an correct data for status 500, Server Error', 
                async () => {
                    mockResponse.status = HttpStatusCode.servererror
                    serviceGetPost.get = vi.fn().mockResolvedValue(mockResponse)
                    const response = await serviceGetPost.get()
                    expect(serviceGetPost.get).toHaveBeenCalled()
                    expect(response.status).toBe(HttpStatusCode.servererror)
                    expect(response).toEqual(mockResponse)
                }
            )

            it(
                'should return an correct data for status 400, Bad Request', 
                async () => {
                    mockResponse.status = HttpStatusCode.badrequest
                    serviceGetPost.get = vi.fn().mockResolvedValue(mockResponse)
                    const response = await serviceGetPost.get()
                    expect(serviceGetPost.get).toHaveBeenCalled()
                    expect(response.status).toBe(HttpStatusCode.badrequest)
                    expect(response).toEqual(mockResponse)
                }
            )

            it(
                'should return an correct data for status 200, Success', 
                async () => {
                    mockResponse.status = HttpStatusCode.success
                    serviceGetPost.get = vi.fn().mockResolvedValue(mockResponse)
                    const response = await serviceGetPost.get()
                    expect(serviceGetPost.get).toHaveBeenCalled()
                    expect(response.status).toBe(HttpStatusCode.success)
                    expect(response).toEqual(mockResponse)
                }
            )
        })
    })


})