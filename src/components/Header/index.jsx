import { Header, Content, FilteredBox, FilteredContainer } from "./style"
import human from "../../assets/human.svg"
import ovni from "../../assets/ovni.svg"
import favorite from "../../assets/favorite.svg"
import logo from "../../assets/logorickandmorty.png"
import { useContext } from "react"
import { Context } from "../Context/Context"


export function HeaderApp() {

    const { search, setSearch } = useContext(Context)
    const { isFiltered, setIsFiltered } = useContext(Context)

    function handleClearFilter() {
        setIsFiltered('')
    }
    function handleHumans() {
        setIsFiltered('human')
    }

    function handleAliens() {
        setIsFiltered('alien')
    }

    function handleFavorites() {
        setIsFiltered('favorites')
    }

    return (
        <>
            <Header>
                <Content>
                    <img src={logo} alt="" />

                    <input placeholder="Buscar personagem" onChange={event => setSearch(event.target.value)} />
                    <FilteredContainer>

                        <FilteredBox
                            onClick={isFiltered === 'human' ? handleClearFilter : handleHumans}
                            className={isFiltered === "human" ? 'active' : ''}
                        >
                            <span>Humanos</span>
                            <img src={human} alt="human-icon" />
                        </FilteredBox>

                        <FilteredBox
                            onClick={isFiltered === 'alien' ? handleClearFilter : handleAliens}
                            className={isFiltered === "alien" ? 'active' : ''}
                        >
                            <span>Aliens</span>
                            <img src={ovni} alt="human-icon" />
                        </FilteredBox>

                        <FilteredBox
                            onClick={isFiltered === 'favorites' ? handleClearFilter : handleFavorites}
                            className={isFiltered === "favorites" ? 'active' : ''}
                        >
                            <span>Favoritos</span>
                            <img src={favorite} alt="human-icon" />
                        </FilteredBox>

                    </FilteredContainer>
                </Content>
            </Header>
        </>
    )
} 