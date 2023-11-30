import { defaultRepoData } from "../data";
import { Repository, repoInfo } from "../types";
import { getWeekIndex } from "../utils";

export const parseRepoDataWeekly = (allIssues: Repository[]) => {
    let repoInfo: repoInfo = defaultRepoData;

    for (let i = 0; i < allIssues.length; ++i) {
        if (allIssues[i].state === "open") repoInfo.openCount++;
        if (allIssues[i].state === "close") repoInfo.closeCount++;

        let weekIndex: number = getWeekIndex(allIssues[i].created_at as Date);
        if (weekIndex < 10 && allIssues[i].state === "open") repoInfo.weekAnalysis[weekIndex].openCount++;
        if (weekIndex < 10 && allIssues[i].state === "close") repoInfo.weekAnalysis[weekIndex].closeCount++;
    }

    let sumOfAllClouserIssues: number = 0;
    for (let i = 0; i < 10; ++i) {
        repoInfo.weekAnalysis[i].closureRate = repoInfo.weekAnalysis[i].closeCount / repoInfo.weekAnalysis[i].openCount;
        sumOfAllClouserIssues += repoInfo.weekAnalysis[i].closureRate;
    }
    repoInfo.averageWeeklyClosure = sumOfAllClouserIssues / 10;
    return repoInfo;
};
