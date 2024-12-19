import { Wrap } from "./styles"
import { IHeader } from "./types"

export default function Header({ children }: IHeader){
    return (
        <Wrap>
            { children }
        </Wrap>
    )
}