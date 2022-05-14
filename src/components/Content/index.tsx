import { ContainerContent, Container } from "./style";
import imagem from "../../assets/personagem.jpeg"
import imagem2 from "../../assets/personagem2.jpeg"

export function Content() {
    return (
        <>
            <Container>
                <ContainerContent>
                    <div>
                        <img src={imagem} alt="" />
                        <span>Rick</span>
                        <button>+ Informações</button>
                        <button>Favoritar</button>
                    </div>
                    <div>
                        <img src={imagem2} alt="" />
                        <span>Rick Sanchez</span>
                        <button>+ Informações</button>
                        <button>Favoritar</button>
                    </div>
                    <div>
                        <img src={imagem} alt="" />
                        <span>Rick</span>
                        <button>+ Informações</button>
                        <button>Favoritar</button>

                    </div>
                    <div>
                        <img src={imagem} alt="" />
                        <span>Rick</span>
                        <button>+ Informações</button>
                        <button>Favoritar</button>
                    </div>
                    <div>
                        <img src={imagem} alt="" />
                        <span>Rick</span>
                        <button>+ Informações</button>
                        <button>Favoritar</button>
                    </div>
                </ContainerContent>
            </Container>
        </>
    )
}