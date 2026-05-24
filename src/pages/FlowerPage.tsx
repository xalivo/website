import {Button, Grid2 as Grid} from "@mui/material";
import {useFlowerService} from "../service/flowerService.ts";

// tools: flower
const FlowerPage = () => {
    const {flowerArray, setRandomFlowers, reset} = useFlowerService();

    return (
        <Grid container spacing={2}>
            <Grid margin={2} size={12} display={"flex"} justifyContent={"space-around"}>
                <Button color={"success"} variant={"contained"}>Share</Button>
                <Button color={"primary"} variant={"contained"} onClick={setRandomFlowers}>Random flowers</Button>
                <Button color={"error"} variant={"contained"} onClick={reset}>Reset</Button></Grid>
            <Grid size={12} minHeight={100} style={{backgroundColor: "blue"}}>
                {flowerArray.toString()}
            </Grid>

        </Grid>
    );
};

export default FlowerPage;