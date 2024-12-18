import {IProject} from "../common/models.ts";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

interface IProjectListItemProps {
    project: IProject;
}

const ProjectListItem = ({project}: IProjectListItemProps) => {
    return (
        <Card sx={{minWidth: 275, padding: 2}}>
            <CardContent>
                <Typography variant={"h6"} fontWeight={"bold"}>{project.name}</Typography>
                <Typography gutterBottom sx={{color: 'text.secondary', fontSize: 14}}>
                    {project.description}
                </Typography>
                <Typography variant="body2">
                    Status: {project.status}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant={"contained"} size="small" href={project.url} target={"_blank"}>Website</Button>
                <Button variant={"contained"} size="small" color={"success"} href={project.repoUrl} target={"_blank"}>Repository</Button>
            </CardActions>
        </Card>
    );
};

export default ProjectListItem;