import { 
    useLoaderData,
    useNavigate, 
} from 'react-router'

import { 
    Image,
} from '@chakra-ui/react'

import { Avatar } from '@/presentation/components/ui'

import { 
    IPost, 
} from '@/domain/models'

import { 
    IHttpResponse,
    HttpStatusCode,
} from '@/infra'

export default function Feed(){

    const nav = useNavigate()
    const response: IHttpResponse<IPost[]> = useLoaderData()
    
    if (
        response.status !== HttpStatusCode.success || 
        !response.data.length
    ) return
    
    const posts: IPost[] = response.data
    
    return (
        <div style={{ display: 'flex', flexFlow: 'column', gap: '1.75rem' }}>
            {
                posts.map(post => (
                    <ul 
                        key={post.id}
                        style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexFlow: 'column',
                            flexWrap: 'wrap',
                            gap: '.85rem 0',
                            marginTop: 'unset', 
                            padding: '13px',
                            textAlign: 'left', 
                            border: 'solid 1px rgba(0, 0, 0, 0.5)',
                            cursor: 'pointer'
                        }}
                        onClick={() => nav(`/post/${post.userId}`)}
                        >
                        <li style={{ maxHeight: '230px', position: 'relative', display: 'flex', }}>
                            <Image src={post.image} width='100%' fit='cover' />
                        </li>
                        <li>
                            <span style={{ fontWeight: 'bold' }}>Id do Post: </span>
                            <span>{ post.id }</span>
                        </li>                           
                        <li>
                            <span style={{ fontWeight: 'bold' }}>Id do Autor: </span>
                            <span>{ post.userId }</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar name='John Doe' src={post.users?.avatar} />
                            <span style={{ fontWeight: 'bold', marginLeft: '.85rem' }}>{post.users?.username}</span>
                        </li>
                        <li>
                            <span style={{ fontWeight: 'bold' }}>Titulo do Post: </span>
                            <span>{ post.title }</span>
                        </li>
                        <li>
                            <span style={{ fontWeight: 'bold' }}>Conteúdo do Post: </span>
                            <span>{ post.body }</span>
                        </li>
                        <li>
                            <span style={{ fontWeight: 'bold' }}>Comment: </span>
                            {
                                
                                !!post.comments?.length && (
                                    post.comments.map(comment => 
                                        <span key={comment.id}>{comment.body}</span>)
                                )
                            }
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}