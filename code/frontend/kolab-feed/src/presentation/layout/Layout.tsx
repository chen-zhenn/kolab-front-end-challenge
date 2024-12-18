import { ILayout } from './types'
import { 
    Wrap, 
} from './styles'

export default function Layout({ children }: ILayout){

    return (
        <Wrap>
          {children}
        </Wrap>
      )
}