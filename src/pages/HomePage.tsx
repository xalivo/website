import {Stack} from "@mui/material";
import ProjectList from "../components/ProjectList.tsx";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <Stack>
            <ProjectList/>
        </Stack>
    );
};

export default HomePage;