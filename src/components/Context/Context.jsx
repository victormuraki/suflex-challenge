import { createContext } from "react";

export const Context = createContext({
    search: null,
    setSearch: () => {},
})