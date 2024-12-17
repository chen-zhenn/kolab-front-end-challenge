import { 
    describe, 
    it, 
    expect,
 } from 'vitest'

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

        describe('Smoke Test', () => {

            it('Should return an getAll method', () => {
                const post = Post()
                expect(post).toHaveProperty('getAll')
            })

            it('Should check if getAll is a function', () => {
                const post = Post()
                expect(typeof post.getAll).toBe('function')
            })
        })
    })

})