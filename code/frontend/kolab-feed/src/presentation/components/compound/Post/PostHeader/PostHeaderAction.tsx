import { 
    FaEllipsisV,
    FaEdit,
    FaTrash, 
} from 'react-icons/fa'

import { 
    MenuRoot,
    MenuTrigger,
    MenuContent,
    MenuItem,
    Button, 
} from '@/presentation/components/ui'

import { IPostHeader } from './types'
import { ActionContainer } from './styles'

export default function PostHeaderAction({ 
    action,
}: IPostHeader) {
    return (
        <ActionContainer>
            {
                action && (
                    <MenuRoot>

                        <MenuTrigger asChild>
                            <Button 
                                aria-label='Ações do post' 
                                variant='ghost'
                                style={{ backgroundColor: 'transparent'}}
                                _hover={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    outline: 'none'
                                }}
                                _focus={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    outline: 'none'
                                }}
                                _focusVisible={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    outline: 'none'
                                }}
                                _active={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    outline: 'none'
                                }}
                            >
                                <FaEllipsisV />
                            </Button>
                        </MenuTrigger>

                        <MenuContent>
                            <MenuItem value='edit' valueText='Editar'>
                                <FaEdit />
                                <span>Editar</span>
                            </MenuItem>
                            <MenuItem value='delete' valueText='Excluir'>
                                <FaTrash />
                                <span>Excluir</span>
                            </MenuItem>
                        </MenuContent>

                    </MenuRoot>
                )
            }
        </ActionContainer> 
    )   
}