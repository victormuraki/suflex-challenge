import { useState } from "react";
import { Context } from "./Context";

export const Provider = ({ children }) => {

    const [search, setSearch] = useState("");
    const [isFiltered, setIsFiltered] = useState([])
    const [favorites, setFavorites] = useState([])
    const [listRender, setListRender] = useState(true);
    const [modalPerson, setModalPerson] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [pagination, setPagination] = useState(1);


    return (
        <Context.Provider value={{ search, setSearch, isFiltered, setIsFiltered, favorites, setFavorites, listRender, setListRender, modalPerson, setModalPerson, modalIsOpen, setModalIsOpen, pagination, setPagination, }}>
            {children}
        </Context.Provider>
    )
}