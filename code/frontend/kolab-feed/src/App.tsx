import { useEffect } from 'react'
import './App.css'
import makePost from './main/usecases/Post'
function App() {

  useEffect(() => {
    (async () => {
      const post = makePost()
      const data = await  post.getAll()
      console.log(data)
    })()
  }, [])

  return (
    <>
      Kolab Feed App
    </>
  )
}

export default App
