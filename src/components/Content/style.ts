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

    }
`
