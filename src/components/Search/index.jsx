import { useContext } from "react"
import { Context } from "../Context/Context"
import { SearchContainer } from "./style";

export function Search() {

    const { setSearch } = useContext(Context);

    return (
        <>
            <SearchContainer>
                <input placeholder="Buscar personagem" onChange={event => setSearch(event.target.value)} />
            </SearchContainer>
        </>
    )
}