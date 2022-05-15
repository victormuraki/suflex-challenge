import { useState } from "react";
import { Context } from "./Context";

export const Provider = ({ children }) => {

    const [search, setSearch] = useState("");
    const [isFiltered, setIsFiltered] = useState([])
    const [favorites, setFavorites] = useState([])
    
    return (
        <Context.Provider value={{ search, setSearch, isFiltered, setIsFiltered, favorites, setFavorites }}>
            {children}
        </Context.Provider>
    )
}