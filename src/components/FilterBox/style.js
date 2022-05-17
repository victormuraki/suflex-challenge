import styled from "styled-components";

export const FilteredContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    width: 50rem;
    max-width: 100%;

    height: 10px;
    max-height: 100%;

`

export const FilteredBox = styled.button`

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