import { useContext, useState } from "react"
import ReactModal from "react-modal"
import { Container, TextInformation } from "./styles";
import closeImg from "../../assets/close.svg"
import { Context } from "../Context/Context";

export function Modal() {

    const { modalPerson } = useContext(Context);
    const { modalIsOpen, setModalIsOpen } = useContext(Context);

    function handleCloseModal() {
        setModalIsOpen(false);
    }

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >
            <button type="button">
                <img src={closeImg}
                    onClick={handleCloseModal}
                    alt="Fechar modal"
                    className="react-modal-close"
                />
            </button>
            <Container>
                <img src={modalPerson?.image} alt="foto-personagem" />
                <TextInformation>
                    <h1>{modalPerson?.name}</h1>
                    <span>Status: <span className={modalPerson.status !== 'Alive' ? 'dead-status' : ''}>{modalPerson.status}</span></span>
                    <span>Tipo: {modalPerson.species}</span>
                    <span>Quantidade episodios: {modalPerson.episode !== undefined ? modalPerson.episode.length : ''}</span>
                    <span>
                        Criado em: <span>{modalPerson.created !== undefined ? new Intl.DateTimeFormat('pt-BR').format(new Date(modalPerson.created)) : ''}</span>
                    </span>
                </TextInformation>
            </Container>
        </ReactModal>
    )
}