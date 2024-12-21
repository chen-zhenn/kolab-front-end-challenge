import { ILayout } from './types'
import { 
    Wrap, 
} from './styles'

export default function Layout({ 
  grid, 
  children 
}: ILayout){

    return (
        <Wrap grid={grid ?? 'default'}>
          {children}
        </Wrap>
      )
}