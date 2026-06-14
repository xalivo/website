export interface IProject {
    name: string;
    url: string;
    status: "completed" | "pending" | "on-hold" | "discontinued";
    description: string;
    repoUrl: string;
    imageUrl: string;
}

// tools: flower
export interface IFlower {
    id: number;
    type: string;
    color: string;
}