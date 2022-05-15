import { ContainerContent, Container, Pagination } from "./style";
import { api } from "../services/api";
import { useEffect, useState, useContext } from "react";
import { Context } from "../Context/Context";


export function Content() {

    const [pagination, setPagination] = useState(1)
    const [dataPagination, setDataPagination] = useState([])
    const [listPerson, setListPerson] = useState([])
    const {search} = useContext(Context)

    useEffect(() => {
        api.get(`character/?page=${pagination}`)
            .then(response => {
                setListPerson(response.data.results)
            })
    }, [pagination])

    useEffect(() => {
        api.get(`character/?name=${search}`)
            .then(response => {
                setListPerson(response.data.results)
            })
    }, [search])

    useEffect(() => {
        api.get(`character`)
            .then(response => {
                setDataPagination(response.data.info)
            })
    }, [])

    function handlePrevPage() {
        pagination === 1 ? setPagination(pagination) : setPagination(pagination - 1)
    }

    function handleNextPage() {
        pagination >= dataPagination.pages ? setPagination(pagination) : setPagination(pagination + 1)
    }

    function handleFavorites() {
    }

    return (
        <>
            <Container>
                <ContainerContent>
                    {listPerson?.map(person => (
                        <div key={person.key}>
                            <img src={person.image} alt="" />
                            <span>{person.name.length > 16 ? `${person.name.substring(0, 16)}...` : person.name}</span>
                            <button>+ Informações</button>
                            <button onClick={handleFavorites}>Favoritar</button>
                        </div>
                    ))}
                </ContainerContent>
            </Container>

            <Pagination>
                <button onClick={handlePrevPage}>Anterior</button>
                <button onClick={handleNextPage}>Próximo</button>
            </Pagination>
        </>
    )
}