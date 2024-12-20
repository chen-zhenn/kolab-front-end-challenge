import { Avatar } from '@/presentation/components/ui'
import { IPostHeader } from './types'
import { AvatarContainer } from './styles'

export default function PostHeaderAvatar({ 
    imageName, 
    imageSource, 
}: IPostHeader) {
    return (
        <AvatarContainer>
            <Avatar 
                name={imageName} 
                src={imageSource}
                size='xl' 
            />
        </AvatarContainer>
    )
}