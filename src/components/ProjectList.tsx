import {Box, Grid2, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {staticApiClient} from "../common/api-client.ts";
import {IProject} from "../common/models.ts";
import ProjectListItem from "./ProjectListItem.tsx";

const ProjectList = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        staticApiClient.get<string>("/project-list.csv")
            .then(res => {
                // remove first & last element --> csv header & empty line
                const lines = res.data.split("\n").slice(1, -1);

                setProjects(lines.map(x => {
                    const splitLine = x.split(";");
                    return {
                        name: splitLine[0],
                        url: splitLine[1],
                        status: splitLine[2],
                        description: splitLine[3],
                        repoUrl: splitLine[4],
                        imageUrl: splitLine[5],
                    } as IProject;
                }));
            });
    }, []);

    return (
        <Box padding={4}>
            <Typography variant="h3" paddingBottom={2}>Projects</Typography>
            <Typography variant="body1" paddingBottom={5}>Note that some repositories may be unavailable at this time.</Typography>
            <Grid2 container justifyContent="center" spacing={3}>
                {projects.map((x, index) => <ProjectListItem key={index} project={x}/>)}
            </Grid2>
        </Box>
    );
};

export default ProjectList;