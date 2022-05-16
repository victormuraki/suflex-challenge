import { Header, Content, FilteredBox, FilteredContainer } from "./style"
import human from "../../assets/human.svg"
import ovni from "../../assets/ovni.svg"
import favorite from "../../assets/favorite.svg"
import logo from "../../assets/logorickandmorty.png"
import { useContext } from "react"
import { Context } from "../Context/Context"


export function HeaderApp() {

    const { search, setSearch } = useContext(Context);
    const { isFiltered, setIsFiltered } = useContext(Context);
    const { listRender, setListRender } = useContext(Context);
    const { setPagination } = useContext(Context);


    function handleClearFilter() {
        setIsFiltered('');
        setListRender(true);
        setSearch('');
    }
    function handleHumans() {
        isFiltered === 'alien' ? setIsFiltered('') : setIsFiltered('human');
        setListRender(true);
        setPagination(1);
    }

    function handleAliens() {
        setIsFiltered('alien');
        isFiltered === 'human' ? setIsFiltered('') : setIsFiltered('alien');
        setListRender(true);
        setPagination(1);
    }

    function handleFavorites() {
        setIsFiltered('favorites');
        setListRender(!listRender);
        setPagination(1);
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