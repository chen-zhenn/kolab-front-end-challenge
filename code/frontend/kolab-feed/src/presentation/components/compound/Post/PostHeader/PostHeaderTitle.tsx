import { Title } from './styles'
import { IPostHeader } from './types'


export default function PostHeaderAvatar({ 
    title, 
}: IPostHeader) {
    return (<Title>{title}</Title>)
}