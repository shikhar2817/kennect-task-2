import React, { useContext } from "react";
import { Repository } from "../types";

interface ContextProps {
    selectedRepo: Repository;
    updateRepoSelection: (repo: Repository) => void;
}

export const defaultRepo: Repository = {
    id: "",
    name: "",
    owner: { login: "" },
    node_id: "",
    full_name: "",
    state: "open",
    created_at: null,
    updated_at: null,
    closed_at: null,
};

export const GlobalContext = React.createContext<ContextProps>({
    selectedRepo: defaultRepo,
    updateRepoSelection: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
