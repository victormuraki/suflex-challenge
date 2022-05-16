import { ContainerContent, Container, Pagination, FavoriteBox } from "./style";
import { api } from "../services/api";
import { useEffect, useState, useContext } from "react";
import { Context } from "../Context/Context";

import favoriteIcon from "../../assets/favorite.svg"


export function Content() {

    const [dataPagination, setDataPagination] = useState([]);
    const [listPerson, setListPerson] = useState([]);

    const { pagination, setPagination } = useContext(Context);
    const { search } = useContext(Context);
    const { isFiltered } = useContext(Context);
    const { favorites, setFavorites } = useContext(Context);
    const { listRender } = useContext(Context);
    const { modalPerson, setModalPerson } = useContext(Context);
    const { setModalIsOpen } = useContext(Context);

    useEffect(() => {
        api.get(`character/?page=${pagination}`)
            .then(response => {
                setListPerson(response.data.results);
            })
    }, [isFiltered === '' ? pagination : ''])

    useEffect(() => {
        api.get(`character/?species=${isFiltered}&page=${pagination}`)
            .then(response => {
                setListPerson(response.data.results);
                setDataPagination(response.data.info);
            })
    }, [isFiltered, pagination])

    useEffect(() => {
        api.get(`character/?name=${search}`)
            .then(response => {
                setListPerson(response.data.results);
            })
    }, [search])

    function handlePrevPage() {
        pagination === 1 ? setPagination(pagination) : setPagination(pagination - 1);
    }

    function handleNextPage() {
        pagination >= dataPagination.pages ? setPagination(pagination) : setPagination(pagination + 1);
    }

    function handleFavorites(favoritePerson) {
        const newFavorite = [...favorites, favoritePerson];
        const nonDuplicates = [... new Set(newFavorite)];
        setFavorites(nonDuplicates);

        alert(`${favoritePerson.name} foi adicionado aos favoritos`);

        const newListPersons = listPerson.filter(person => person.id !== favoritePerson.id);
        setListPerson(newListPersons);
    }

    function handleRemoveFavorites(RemovePerson) {
        const filterRemoveFavorite = favorites.filter(person => person.id !== RemovePerson.id);
        setFavorites(filterRemoveFavorite);

        alert(`${RemovePerson.name} foi removido dos favoritos`);
    }

    function handleModalInfo(person) {
        setModalPerson(person);
        setModalIsOpen(true);
        console.log(modalPerson)
    }

    return (
        <>
            <Container>
                <ContainerContent>
                    {listRender ?
                        listPerson?.map(person => (
                            <div key={person.key}>
                                <img src={person.image} alt="" />
                                <span>{person.name.length > 16 ? `${person.name.substring(0, 16)}...` : person.name}</span>
                                <button onClick={() => handleModalInfo(person)}>+ Informações</button>
                                <button onClick={() => handleFavorites(person)}>Favoritar</button>
                            </div>
                        ))
                        :
                        favorites?.map(person => (
                            <div key={person.key}>
                                <img src={person.image} alt="" />
                                <span>{person.name.length > 16 ? `${person.name.substring(0, 16)}...` : person.name}</span>
                                <button onClick={() => handleModalInfo(person)}>+ Informações</button>
                                <button onClick={() => handleRemoveFavorites(person)}>remover favorito</button>
                            </div>
                        ))
                    }
                </ContainerContent>
            </Container>

            <Pagination>
                <button onClick={handlePrevPage}>Anterior</button>
                <button onClick={handleNextPage}>Próximo</button>
            </Pagination>
        </>
    )
}