import styled from "styled-components";

export const Header = styled.div`
    background: var(--white);
    max-width: 100%;
    height: 23rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin: 0 auto;

    padding: 2rem 1rem 12rem;

    img {
        height: 10rem;
        max-height: 100%;
    }

    h1 {
        color: var(--white);
        font-size: 3rem;
    }

    h2 {
        margin: 0.5rem 0;
    }

    .active {
        background: var(--white);
    }

`
