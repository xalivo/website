import {Stack} from "@mui/material";
import ProjectList from "../components/ProjectList.tsx";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <Stack>
            <Link to={"/flower"}>flower</Link>
            <ProjectList/>
        </Stack>
    );
};

export default HomePage;