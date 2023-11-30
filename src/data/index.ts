import { repoInfo, weeklyRepoInfo } from "../types";

export const defaultWeeklyRepoInfo: weeklyRepoInfo = {
    openCount: 0,
    closeCount: 0,
    weeklyIssueCount: 0,
    closureRate: 0,
};

export const defaultRepoData: repoInfo = {
    closeCount: 0,
    openCount: 0,
    weekAnalysis: [
        defaultWeeklyRepoInfo,
        defaultWeeklyRepoInfo,
        defaultWeeklyRepoInfo,
        defaultWeeklyRepoInfo,
        defaultWeeklyRepoInfo,
        defaultWeeklyRepoInfo,
        defaultWeeklyRepoInfo,
        defaultWeeklyRepoInfo,
        defaultWeeklyRepoInfo,
        defaultWeeklyRepoInfo,
    ],
    averageWeeklyClosure: 0,
};
