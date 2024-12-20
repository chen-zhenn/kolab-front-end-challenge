import styled from 'styled-components'

const shared = () =>  `
    cursor: pointer;
`

export const Container = styled.header`
    display: flex;
    align-items: center;
`

export const Title = styled.h5`
    ${shared}
    &:hover {
        text-decoration: underline;
    }
`

export const ActionContainer = styled.aside`
    margin-left: auto;
`

export const AvatarContainer = styled.aside`
    ${shared}
    margin-right: .85rem;
`
