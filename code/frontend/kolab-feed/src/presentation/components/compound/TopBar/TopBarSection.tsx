import { useNavigate } from 'react-router'

import { 
    Image,
    Input,
} from '@chakra-ui/react'

import { Avatar } from '@/presentation/components/ui'

import { 
    Section,
 } from './styles'

import { ITopBar } from './types'

export default function TopBarSection({ type, children }: ITopBar) {

    const nav = useNavigate()

    const section: Record<string, any> = {
        brand: <Image src='logo.svg' onClick={() => nav('/')} style={{ cursor: 'pointer' }} />,
        search: <Input placeholder='Pesquise por usuário' variant='subtle' />,
        profile: <Avatar name='John Doe' src='https://bit.ly/sage-adebayo' />,
        generic: <Section>{children}</Section>,
      }

    return ( type ? section[type] : section['generic'] )
}