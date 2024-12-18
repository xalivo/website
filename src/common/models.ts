export interface IProject {
    name: string;
    url: string;
    status: "completed" | "pending" | "on-hold" | "discontinued";
    description: string;
    repoUrl: string;
    imageUrl: string;
}