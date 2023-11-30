import { defaultRepoData } from "../data";
import { Repository, repoInfo } from "../types";
import { getWeekIndex } from "../utils";

export const getAllRepoList = async (query: string) => {
    const req = await fetch(`https://api.github.com/search/repositories?q=${query}`);
    const data = await req.json();
    if (data.items.length > 10) return data.items.slice(0, 10);
    return data.items;
};

export const getAllIssuesListOfRepo = async (owner: string, repoName: string) => {
    let allIssues: Repository[] = [];

    if (!owner || !repoName) return allIssues;

    for (let i = 1; i <= 10; ++i) {
        const req = await fetch(
            `https://api.github.com/repos/${owner}/${repoName}/issues?state=all&per_page=100&page=${i}`
        );
        const data = await req.json();
        allIssues = allIssues.concat(data);
    }

    if (allIssues.length > 1000) return allIssues.slice(0, 1000);
    return allIssues;
};
