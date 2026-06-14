import {IFlower} from "../common/models.ts";
import {Stack} from "@mui/material";
import {FLOWER_IMAGE_BASE_URL} from "../common/deploy-config.ts";

interface IFlowerViewProps {
    flowers: IFlower[];
}

// tools: flower
const FlowerView = ({flowers}: IFlowerViewProps) => {
    return (
        <Stack direction={"row"}>
            {flowers.map(f => (
                <img key={f.id} width={`${100 / flowers.length}%`} src={`${FLOWER_IMAGE_BASE_URL}${f.type}-${f.color}.png`} alt={`${f.type} in ${f.color}`}/>
            ))}
        </Stack>
    );
};

export default FlowerView;