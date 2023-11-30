export interface Repository {
    id: string;
    owner: Owner;
    name: string;
    node_id: string;
    full_name: string;
    state: "open" | "close";
    created_at: Date | null;
    updated_at: Date | null;
    closed_at: Date | null;
}

interface Owner {
    login: string;
}

export interface repoInfo {
    openCount: number;
    closeCount: number;
    weekAnalysis: weeklyRepoInfo[];
    averageWeeklyClosure: number;
}

export interface weeklyRepoInfo {
    openCount: number;
    closeCount: number;
    weeklyIssueCount: number;
    closureRate: number;
}
