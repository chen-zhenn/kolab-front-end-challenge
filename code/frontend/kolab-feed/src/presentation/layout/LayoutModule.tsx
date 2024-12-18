import { ILayout } from './types'
import {
    Header,
    Content,
    Sidebar,
    Footer,
} from './styles'

export default function LayoutModule({ type, children }: ILayout){

    const module = {
        header: <Header>{children}</Header>,
        content: <Content>{children}</Content>,
        sidebar: <Sidebar>{children}</Sidebar>,
        footer: <Footer>{children}</Footer>,
      }

      return ( type ? module[type] : module['content'] )
}