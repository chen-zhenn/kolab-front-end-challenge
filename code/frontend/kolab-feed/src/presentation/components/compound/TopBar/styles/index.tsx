import styled from 'styled-components'

import { 
    BreakPoints as breakpoints, 
} from '@/presentation/theme'

export const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: max-content 1fr max-content;
    justify-content: space-between;
    align-items: center;
    gap: 1.75rem;

    @media(min-width: ${breakpoints.medium}) {
        display: grid;
    }
`

export const Section = styled.section``