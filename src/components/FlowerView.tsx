import {IFlower} from "../common/models.ts";
import {Stack} from "@mui/material";
import {FLOWER_IMAGE_BASE_URL} from "../common/deploy-config.ts";

interface IFlowerViewProps {
    flowers: IFlower[];
}

// tools: flower
const FlowerView = ({flowers}: IFlowerViewProps) => {
    return (
        <Stack direction={"row"} style={{backgroundColor: "blue"}}>
            {flowers.map(f => (
                <img key={f.id} width={75} src={`${FLOWER_IMAGE_BASE_URL}${f.type}-${f.color}.png`}/>
            ))}
        </Stack>
    );
};

export default FlowerView;