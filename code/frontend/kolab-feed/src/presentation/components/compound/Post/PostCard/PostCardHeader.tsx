import { 
    Card, 
} from '@chakra-ui/react'
import { IPostCard } from './types'

export default function PostCardHeader({ children }:  IPostCard) {
    return (
        <Card.Header className='-header'>
            {children}
        </Card.Header>
    )
}