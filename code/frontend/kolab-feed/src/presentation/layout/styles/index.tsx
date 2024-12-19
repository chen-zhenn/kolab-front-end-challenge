import styled from 'styled-components'

export const Wrap = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    min-height: 100vh;
`

export const Header = styled.header`
    grid-row: 1;
    grid-column: 2 / 3;
    padding: 1.75rem;
    background-color: rgba(255, 197, 32, 1);
`

export const Content = styled.main`
    grid-row: 2;
    grid-column: 2 / 3;
    padding: 1.75rem;
`

export const Sidebar = styled.aside`
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(26, 32, 44, 1);
`

export const Footer = styled.footer`
    grid-row: 3;
    grid-column: 1 / 3;
`