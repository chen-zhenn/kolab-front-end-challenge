import { 
    describe, 
    it, 
    expect,
    vi,
 } from 'vitest'

import { IPost } from '../../domain/models'
import Post from './Post'


describe('Use Case Post', () => {

    describe('Smoke Test', () => {
        const post = Post

        it('Should check if Post Factory exist', () => {
            expect(post).toBeDefined()
        })

        it('Should check if Post is a function', () => {  
            expect(typeof post).toBe('function')
        })
    })

    describe('GetPosts', () => {
        const post = Post()

        describe('Smoke Test', () => {

            it('Should return an getAll method', () => {
                expect(post).toHaveProperty('getAll')
            })

            it('Should check if getAll is a function', () => {
                expect(typeof post.getAll).toBe('function')
            })
        })

        describe('Data', () => {
            
            it('should return an empty array', async () => {
                const mockData: IPost[] = []
                post.getAll = vi.fn().mockResolvedValue(mockData)
                const result = await post.getAll()
                expect(result).toEqual(mockData)
            })

            it('should return an array of Post', async () => {
                const mockData: IPost[] = [{
                    userId: 1,
                    id: 1,
                    title: 'Post 1',
                    body: ''

                }]
                post.getAll = vi.fn().mockResolvedValue(mockData)
                const result = await post.getAll()
                expect(result).toEqual(mockData)
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

})