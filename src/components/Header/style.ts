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

    input {
        width: 50rem;
        max-width: 100%;
        height: 3rem;
        margin: 1rem 0 2rem 0;
        border-radius: 2rem;
        border: none;
        padding: 0 1.5rem;
        background: var(--background);

        text-align: center;
        font-size: 1rem;
        color: var(--text-body);
    }

    h2 {
        margin: 0.5rem 0;
    }
`

export const FilteredContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    width: 50rem;
    max-width: 100%;

    height: 10px;
    max-height: 100%;

`

export const FilteredBox = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    height: 3rem;
    max-height: 100%;
    border: 1px solid #d7d7d7;

    border-radius: 0.5rem;
    background: var(--background);

    img {
        height: 1.6rem;
        max-width: 100%;
    }

    span {
        font-size: 1rem;
        color: var(--text-title)
    }
    
`