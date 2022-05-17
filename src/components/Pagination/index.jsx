import { useContext } from "react";
import { Context } from "../Context/Context";

import { PaginationStyle } from "./style";

export function Pagination() {

    const { dataPagination } = useContext(Context);
    const { pagination, setPagination } = useContext(Context);
    
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