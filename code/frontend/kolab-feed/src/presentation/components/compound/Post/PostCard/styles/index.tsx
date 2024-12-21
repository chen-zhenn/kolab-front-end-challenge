import styled from 'styled-components'

export const PostCardContainer = styled.article`
    margin: 0 auto;
    max-width: 50vw;
    margin-bottom: 1.75rem;

    .-header {
        position: relative;
        &:after {
            content: '';
            position: absolute;
            display: block;
            left: 0;
            bottom: -15px;
            width: 100%;
            height: 1px;
            background-color: rgba(228, 228, 231, 1);
        }
    }
`
export const ContentSection = styled.section`
    position: relative;
`