import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    align-items: center;
    align-content: center;
`

export const ContainerContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 20rem);
    padding: 4rem;
    width: 80rem;
    max-width: 100%;
    gap: 2rem;
    justify-items: center;
    justify-content: center;

    div{
        display: flex;
        flex-direction: column;
        background: var(--shape);
        width: 15rem;
        height: 21rem;
        max-width: 100%;
        align-items: center;
        border-radius: 2rem;

        img {
            margin-top: 1rem;
            height: 12rem;
            border-radius: 1rem;
        }
    
    span {
        font-size: 1.3rem;
        color: var(--text-title);
        margin: 1rem 0;
    }

    button {
        background: transparent;
        border: none;
        color: var(--green);
    }

    &:hover {
        border: 1px solid #d7d7d7;
    }

    }
`

export const Pagination = styled.div`
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