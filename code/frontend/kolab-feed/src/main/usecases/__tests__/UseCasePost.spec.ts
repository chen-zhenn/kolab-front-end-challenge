import { 
    describe, 
    it, 
    expect,
 } from 'vitest'

import { makePost } from '@/main/usecases'

describe('Use Case Post', () => {

    describe('Smoke Test', () => {
        const post = makePost

        it('should check if Post Factory exist', () => {
            expect(post).toBeDefined()
        })

        it('should check if Post is a function', () => {  
            expect(typeof post).toBe('function')
        })
    })
})