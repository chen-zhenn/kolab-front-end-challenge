import { ILayout } from './types'
import {
    Header,
    Content,
    Sidebar,
    Footer,
    Generic,
} from './styles'

export default function LayoutModule({  
    type, 
    children,
}: ILayout){

    const module = {
        header: <Header>{children}</Header>,
        content: <Content>{children}</Content>,
        sidebar: <Sidebar>{children}</Sidebar>,
        footer: <Footer>{children}</Footer>,
        generic: <Generic>{children}</Generic>,
      }

      return ( type ? module[type] : module['generic'] )
}