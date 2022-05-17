import { useEffect, useContext } from "react";
import { Context } from "../Context/Context";
import { Pagination } from "../Pagination";
import { api } from "../services/api";

import { ContainerContent, Container } from "./style";

export function Content() {

    const { listPerson, setListPerson, setDataPagination, pagination, isFiltered, favorites, 
        setFavorites, listRender, setModalPerson, setModalIsOpen } = useContext(Context);

    useEffect(() => {
        api.get(`character/?species=${isFiltered}&page=${pagination}`)
            .then(response => {
                setListPerson(response.data.results);
                setDataPagination(response.data.info);
            })
    }, [isFiltered, pagination])

    function handleFavorites(favoritePerson) {
        const newFavorite = [...favorites, favoritePerson];
        const nonDuplicates = [...new Set(newFavorite)];
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
    }

    return (
        <>
            <Container>
                <ContainerContent>
                    {listRender ?
                        listPerson?.map(person => (
                            <div key={person.id}>
                                <img src={person.image} alt="" />
                                <span>{person.name.length > 16 ? `${person.name.substring(0, 16)}...` : person.name}</span>
                                <button onClick={() => handleModalInfo(person)}>+ Informações</button>
                                <button onClick={() => handleFavorites(person)}>Favoritar</button>
                            </div>
                        ))
                        :
                        favorites?.map(person => (
                            <div key={person.id}>
                                <img src={person.image} alt="" />
                                <span>{person.name.length > 16 ? `${person.name.substring(0, 16)}...` : person.name}</span>
                                <button onClick={() => handleModalInfo(person)}>+ Informações</button>
                                <button onClick={() => handleRemoveFavorites(person)}>Remover favorito</button>
                            </div>
                        ))
                    }
                </ContainerContent>
            </Container>

            <Pagination />
        </>
    )
}