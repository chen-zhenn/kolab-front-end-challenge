import { 
    useLoaderData, 
} from "react-router"

import { 
    IPost, 
} from '@/domain/models'

import { 
    IHttpResponse,
    HttpStatusCode,
} from '@/infra'

export default function Post(){

    const response: IHttpResponse<IPost[]> = useLoaderData()
    
    if (
        response.status !== HttpStatusCode.success || 
        !response.data.length
    ) return
    
    const posts: IPost[] = response.data

    return (
        <>
            {
                posts.map(post => (
                    <ul 
                        key={post.id}
                        style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexFlow: 'column',
                            flexWrap: 'wrap',
                            marginTop: 'unset', 
                            padding: '13px',
                            textAlign: 'left', 
                            border: 'solid 1px rgba(0, 0, 0, 0.5)'
                        }}>
                        <li>
                            <span style={{ fontWeight: 'bold' }}>Post Id: </span>
                            <span>{ post.id }</span>
                        </li>                           
                        <li>
                            <span style={{ fontWeight: 'bold' }}>Post Author Id: </span>
                            <span>{ post.userId }</span>
                        </li>
                        <li>
                            <span style={{ fontWeight: 'bold' }}>Post Title: </span>
                            <span>{ post.title }</span>
                        </li>
                        <li>
                            <span style={{ fontWeight: 'bold' }}>Post Content: </span>
                            <span>{ post.body }</span>
                        </li>
                    </ul>
                ))
            }
        </>
    )
}