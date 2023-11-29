import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

export const Dashboard = () => {
    const { selectedRepo } = useGlobalContext();
    return <div>{selectedRepo.full_name}</div>;
};
