import styled from "styled-components";

export const PaginationStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 5rem);
    gap: 1rem;
    justify-items: center;
    justify-content: center;
    padding-bottom: 2rem;

    button {
        background: var(--white);
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        width: 5rem;
        max-width: 100%;
        height: 2rem;
        max-width: 100%;

        &:hover {
            font-weight: 600;
        }
}
`