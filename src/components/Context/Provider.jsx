import { useState } from "react";
import { Context } from "./Context";

export const Provider = ({ children }) => {

    const [search, setSearch] = useState("");

    return (
        <Context.Provider value={{ search , setSearch }}>
            {children}
        </Context.Provider>
    )
}