import { useContext, useEffect } from "react"
import { Context } from "../Context/Context"
import { api } from "../services/api";

import { SearchContainer } from "./style";

export function Search() {

    const { search, setSearch, setListPerson } = useContext(Context);

    useEffect(() => {
        api.get(`character/?name=${search}`)
            .then(response => {
                setListPerson(response.data.results);
            })
    }, [search])

    return (
        <>
            <SearchContainer>
                <input placeholder="Buscar personagem" onChange={event => setSearch(event.target.value)} />
            </SearchContainer>
        </>
    )
}