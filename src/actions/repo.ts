export const getAllRepoList = async (query: string) => {
    const req = await fetch(`https://api.github.com/search/repositories?q=${query}`);
    const data = await req.json();
    console.log("Data", data.items.slice(0, 10));
    if (data.items.length > 10) return data.items.slice(0, 10);
    return data.items;
};
