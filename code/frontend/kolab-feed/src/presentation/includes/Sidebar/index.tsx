import { Wrap } from "./styles"
import { ISidebar } from "./types"

export default function Sidebar({ children }: ISidebar){
    return (
        <Wrap>
            { children }
        </Wrap>
    )
}