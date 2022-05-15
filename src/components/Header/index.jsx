import { Header, Content, FilteredBox, FilteredContainer } from "./style"
import human from "../../assets/human.svg"
import ovni from "../../assets/ovni.svg"
import favorite from "../../assets/favorite.svg"
import logo from "../../assets/logorickandmorty.png"
import { useContext } from "react"
import { Context } from "../Context/Context"


export function HeaderApp() {

    const {search, setSearch} = useContext(Context)

    return (
        <>
            <Header>
                <Content>
                    <img src={logo} alt="" />

                    <input placeholder="Buscar personagem" onChange={event => setSearch(event.target.value)}/>
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