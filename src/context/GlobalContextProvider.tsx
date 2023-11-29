import React, { ReactNode, useState } from "react";
import { GlobalContext, defaultRepo } from "./GlobalContext";
import { Repository } from "../types";

interface Props {
    children?: ReactNode;
}

const GlobalContextProvider = ({ children }: Props) => {
    const [selectedRepo, setSelectedRepo] = useState<Repository>(defaultRepo);

    const updateRepoSelection = (newRepo: Repository) => {
        setSelectedRepo(newRepo);
    };

    return <GlobalContext.Provider value={{ selectedRepo, updateRepoSelection }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
