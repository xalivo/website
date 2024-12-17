import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import apiClient from "../common/api-client.ts";
import {IProject} from "../common/models.ts";

const ProjectList = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        apiClient.get<string>("/test.txt")
            .then(res => {
                const lines = res.data.split("\n");
                setProjects(lines.map(x => {return {name: x.split(";")[0], url: x.split(";")[1]}}).slice(0, -1));
            });
    }, []);

    return (
        <Box>
            {projects.map(x => <p key={x.name}>{x.name}: {x.url}</p>)}
        </Box>
    );
};

export default ProjectList;