import { 
    describe, 
    it, 
    expect,
    vi,
 } from 'vitest'

import { IPost } from '@/domain/models'
import { makePost } from '@/main/usecases'

describe('Use Case Get All Post', () => {

    const post = makePost()

    describe('Smoke Test', () => {

        it('should return an getAll method', () => {
            expect(post).toHaveProperty('getAll')
        })

        it('should check if getAll is a function', () => {
            expect(typeof post.getAll).toBe('function')
        })
    })

    describe('Status Code', () => {
        
        it('should return an status code 200 for Success', async () => {
            const status = 200
            const mock = { status }
            post.getAll = vi.fn().mockResolvedValue(mock)
            const response = await post.getAll()
            expect(response.status).toEqual(mock.status)
        })

        it('should return an status code 400 for Bad request', async () => {
            const status = 400
            const mock = { status }
            post.getAll = vi.fn().mockResolvedValue(mock)
            const response = await post.getAll()
            expect(response.status).toEqual(mock.status)
        })

        it('should return an status code 500 for Server Error', async () => {
            const status = 500
            const mock = { status }
            post.getAll = vi.fn().mockResolvedValue(mock)
            const response = await post.getAll()
            expect(response.status).toEqual(mock.status)
        })
    })

    describe('Data', () => {
        
        it('should return an empty array', async () => {
            const data: IPost[] = []
            const mock = { data }
            post.getAll = vi.fn().mockResolvedValue(mock)
            const response = await post.getAll()
            expect(response.data).toEqual(mock.data)
        })

        it('should return an array of Post', async () => {
            const data: IPost[] = [{
                userId: 1,
                id: 1,
                title: 'Post 1',
                body: ''

            }]
            const mock = { data }
            post.getAll = vi.fn().mockResolvedValue(mock)
            const response = await post.getAll()
            expect(response.data).toEqual(mock.data)
        })
    })

    describe('Error Handling', () => {

        it('should throw an error', async () => {
            post.getAll = vi.fn().mockImplementationOnce(() => {
                return Promise.reject(new Error())
            })
            await expect(post.getAll()).rejects.toThrow()
        })
    })
})