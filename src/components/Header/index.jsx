import logo from "../../assets/logorickandmorty.png"
import { FilterBox } from "../FilterBox"

import { Search } from "../Search"

import { Header, Content, FilteredBox, FilteredContainer } from "./style"

export function HeaderApp() {

    return (
        <>
            <Header>
                <Content>
                    <img src={logo} alt="" />
                    <Search/>
                    <FilterBox />
                </Content>
            </Header>
        </>
    )
} 