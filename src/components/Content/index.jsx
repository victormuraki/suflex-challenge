import { ContainerContent, Container } from "./style";
import { api } from "../services/api";
import { useEffect, useState } from "react";


export function Content() {

    const [listPerson, setListPerson] = useState([])

    useEffect(() => {
        api.get('character')
            .then(response => {
                setListPerson(response.data.results)
            })
    }, [])

    return (
        <>
            <Container>
                <ContainerContent>
                {listPerson.map(person => (
                        <div key={person.key}>
                            <img src={person.image} alt="" />
                            <span>{person.name}</span>
                            <button>+ Informações</button>
                            <button>Favoritar</button>
                        </div>
                ))}
                </ContainerContent>
            </Container>
        </>
    )
}