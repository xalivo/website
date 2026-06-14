import {Button, Grid2 as Grid} from "@mui/material";
import {useFlowerService} from "../service/flowerService.ts";
import FlowerView from "../components/FlowerView.tsx";
import BeeView from "../components/BeeView.tsx";

// tools: flower
const FlowerPage = () => {
    const {flowerArray, setRandomFlowers, reset} = useFlowerService();

    const setRandomFlowerInterval = () => {
        setRandomFlowers();
        setInterval(setRandomFlowers, 2000);
    }

    return (
        <Grid container spacing={3}>
            <Grid margin={2} size={12} display={"flex"} justifyContent={"space-around"}>
                <Button color={"success"} variant={"contained"} disabled={true}>Share</Button>
                <Button color={"primary"} variant={"contained"} onClick={() => setRandomFlowerInterval()}>
                    Random flowers
                </Button>
                <Button color={"error"} variant={"contained"} onClick={reset}>Reset</Button>
            </Grid>
            <Grid size={12}>
                <BeeView initialBeeTop={130}/>
                <BeeView initialBeeTop={130} initialBeeRight={200} initalBeeIndex={1}/>
            </Grid>
            <Grid size={12} minHeight={100}>
                <FlowerView flowers={flowerArray}/>
            </Grid>
        </Grid>
    );
};

export default FlowerPage;