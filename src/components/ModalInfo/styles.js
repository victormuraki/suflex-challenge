import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    display: grid;
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
        width: 12rem;
        height: 12rem;
    }

    .dead-status{
        color: #ff0000;
        font-weight: 600;
    }
`

export const TextInformation = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;

    span {
        margin: 0.25rem 0;
        color: var(--text-body);
    }
`