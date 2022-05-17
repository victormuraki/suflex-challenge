import human from "../../assets/human.svg";
import ovni from "../../assets/ovni.svg";
import favorite from "../../assets/favorite.svg";

import { Context } from "../Context/Context";

import { FilteredBox, FilteredContainer } from "./style";
import { useContext} from "react";

export function FilterBox() {
    const { isFiltered, setIsFiltered, listRender, setListRender, setPagination} = useContext(Context);

    function handleClearFilter() {
        setIsFiltered('');
        setListRender(true);
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
            <FilteredContainer>

                <FilteredBox
                    onClick={isFiltered === 'human' ? handleClearFilter : handleHumans}
                    className={isFiltered === 'human' ? 'active' : ''}
                >
                    <span>Humanos</span>
                    <img src={human} alt='human-icon' />
                </FilteredBox>

                <FilteredBox
                    onClick={isFiltered === 'alien' ? handleClearFilter : handleAliens}
                    className={isFiltered === 'alien' ? 'active' : ''}
                >
                    <span>Aliens</span>
                    <img src={ovni} alt='human-icon' />
                </FilteredBox>

                <FilteredBox
                    onClick={isFiltered === 'favorites' ? handleClearFilter : handleFavorites}
                    className={isFiltered === 'favorites' ? 'active' : ''}
                >
                    <span>Favoritos</span>
                    <img src={favorite} alt='human-icon' />
                </FilteredBox>

            </FilteredContainer>
        </>
    )
}