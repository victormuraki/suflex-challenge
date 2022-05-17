import { useContext } from "react"
import { Context } from "../Context/Context"

export function Search() {

    const { search, setSearch } = useContext(Context);

    return (
        <>
            <input placeholder="Buscar personagem" onChange={event => setSearch(event.target.value)} />
        </>
    )
}