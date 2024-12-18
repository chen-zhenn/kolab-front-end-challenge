import { useEffect } from 'react'

import { makePost } from '@/main/usecases'

export default function Feed(){

    useEffect(() => {
        (async () => {
          const post = makePost()
          const data = await  post.getAll()
          console.log(data)
        })()
      }, [])

    return (
        <>Feed Page</>
    )
}