import { useContext, useEffect } from "react";
import { Context } from "../Context/Context";
import { api } from "../services/api";

import { PaginationStyle } from "./style";

export function Pagination() {
    
    const { dataPagination, pagination, setPagination, isFiltered, setListPerson } = useContext(Context);

    useEffect(() => {
        api.get(`character/?page=${pagination}`)
            .then(response => {
                setListPerson(response.data.results);
            })
    }, [isFiltered === '' ? pagination : ''])


    function handlePrevPage() {
        pagination === 1 ? setPagination(pagination) : setPagination(pagination - 1);
    }

    function handleNextPage() {
        pagination >= dataPagination.pages ? setPagination(pagination) : setPagination(pagination + 1);
    }

    return (
        <>
            <PaginationStyle>
                <button onClick={handlePrevPage}>Anterior</button>
                <button onClick={handleNextPage}>Próximo</button>
            </PaginationStyle>
        </>
    )
}