import React, { useState } from "react";
import "./style.css";
import { getAllRepoList } from "../actions/repo";
import { Repository } from "../types";
import { useGlobalContext } from "../context/GlobalContext";

export const SearchBar = () => {
    const [repoName, setRepoName] = useState("");
    const [repoList, setRepoList] = useState([]);

    const { updateRepoSelection } = useGlobalContext();

    const handleChange = (e: any) => {
        setRepoName(e.target.value);
    };

    const handleSearch = async () => {
        const newRepoListdata = await getAllRepoList(repoName);
        setRepoList(newRepoListdata);
    };

    return (
        <div>
            <div className="searchSection">
                <input
                    type="text"
                    className="searchInput"
                    value={repoName}
                    onChange={handleChange}
                    placeholder="Search repository"
                />
                <button className="searchBtn" onClick={handleSearch}>
                    {" "}
                    Search{" "}
                </button>
            </div>
            <ul className="optionList">
                {repoList.map((repo: Repository) => (
                    <li key={repo.node_id} className="repoOptions" onClick={() => updateRepoSelection(repo)}>
                        {repo.full_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
