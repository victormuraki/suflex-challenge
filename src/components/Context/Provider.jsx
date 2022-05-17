import { useState } from "react";
import { Context } from "./Context";

export const Provider = ({ children }) => {

    const [search, setSearch] = useState("");
    const [isFiltered, setIsFiltered] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [pagination, setPagination] = useState(1);
    const [dataPagination, setDataPagination] = useState([]);
    const [modalPerson, setModalPerson] = useState([]);
    const [listRender, setListRender] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [listPerson, setListPerson] = useState([]);


    return (
        <Context.Provider 
        value={{ 
        search, setSearch, isFiltered, setIsFiltered, favorites, 
        setFavorites, listRender, setListRender, modalPerson, setModalPerson, modalIsOpen, 
        setModalIsOpen, pagination, setPagination, dataPagination, setDataPagination, 
        listPerson, setListPerson
            }}
        >
            {children}
        </Context.Provider>
    )
}