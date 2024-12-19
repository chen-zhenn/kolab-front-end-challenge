import {
    Wrap, 
 } from './styles'
 
import { ITopBar } from './types'

export default function TopBar({ children}: ITopBar){
    return (
        <Wrap>
            { children }
        </Wrap>
    )
}