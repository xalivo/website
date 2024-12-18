import {IProject} from "../common/models.ts";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {IMAGE_PATH} from "../common/deploy-config.ts";

interface IProjectListItemProps {
    project: IProject;
}

const ProjectListItem = ({project}: IProjectListItemProps) => {
    const image = project.imageUrl === "" ? "https://placehold.co/400.jpg" : IMAGE_PATH + project.imageUrl;
    return (
        <Card sx={{minWidth: 350}}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={project.name}
            />
            <CardContent>
                <Typography variant={"h6"} fontWeight={"bold"}>{project.name}</Typography>
                <Typography gutterBottom sx={{color: 'text.secondary', fontSize: 14}}>
                    {project.description}
                </Typography>
                <Typography variant="body2">
                    Status: {project.status}
                </Typography>
            </CardContent>
            <CardActions sx={{padding: 2, paddingTop: 0}}>
                <Button variant={"contained"} size="small" href={project.url} target={"_blank"}>Website</Button>
                <Button variant={"contained"} size="small" color={"success"} href={project.repoUrl} target={"_blank"}>Repository</Button>
            </CardActions>
        </Card>
    );
};

export default ProjectListItem;