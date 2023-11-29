export interface Repository {
    id: string;
    owner: Owner;
    name: string;
    node_id: string;
    full_name: string;
}

interface Owner {
    login: string;
}
