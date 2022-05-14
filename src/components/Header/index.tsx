import { Header, Content, FilteredBox, FilteredContainer } from "./style"
import human from "../../assets/human.svg"
import ovni from "../../assets/ovni.svg"
import favorite from "../../assets/favorite.svg"
import logo from "../../assets/logorickandmorty.png"


export function HeaderApp() {
    return (
        <>
            <Header>
                <Content>
                    {/* <h1>Rick and Morty Library</h1> */}
                    <img src={logo} alt="" />
                    <input type="text" placeholder="Buscar personagem" />

                    <FilteredContainer>

                        <FilteredBox>
                            <span>Humanos</span>
                            <img src={human} alt="human-icon" />
                        </FilteredBox>
                        <FilteredBox>
                            <span>Aliens</span>
                            <img src={ovni} alt="human-icon" />
                        </FilteredBox>
                        <FilteredBox>
                            <span>Favoritos</span>
                            <img src={favorite} alt="human-icon" />
                        </FilteredBox>
                        
                    </FilteredContainer>
                </Content>
            </Header>
        </>
    )
} 