import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { getAllIssuesListOfRepo } from "../actions/repo";
import { Repository, repoInfo, weeklyRepoInfo } from "../types";
import "./style.css";
import { parseRepoDataWeekly } from "../actions/parseRepoData";
import { defaultRepoData } from "../data";

export const Dashboard = () => {
    const [repoData, setRepoData] = useState<repoInfo>(defaultRepoData);
    const { selectedRepo } = useGlobalContext();

    useEffect(() => {
        const updateDashboard = async () => {
            const newData = await getAllIssuesListOfRepo(selectedRepo.owner.login, selectedRepo.name);
            console.log("NEW DATA", newData);
            const repoAnalysisData = parseRepoDataWeekly(newData);
            setRepoData(repoAnalysisData);
        };
        updateDashboard();
    }, [selectedRepo]);
    return (
        <div className="dashboard">
            {
                <>
                    <div>
                        {" "}
                        <h3>Open Issues: {repoData.openCount}</h3>
                        <h3>Closed Issues: {repoData.closeCount}</h3>
                    </div>
                    {repoData.weekAnalysis.map((week: weeklyRepoInfo, index: number) => {
                        return (
                            <div key={`weekly-${index + 1}`}>
                                <h1> Week: {index + 1}</h1>
                                <p> Total Issues: {week.closeCount + week.openCount}</p>
                                <p>
                                    Open Issues: {week.openCount}, Closed Issues: {week.closeCount}{" "}
                                </p>
                                <p> Weekly Closure Rate: {week.closeCount / week.openCount}</p>
                            </div>
                        );
                    })}
                    <div>
                        <h3>Average Weekly Closure Rate: {repoData.averageWeeklyClosure}</h3>
                    </div>
                </>
            }
        </div>
    );
};
