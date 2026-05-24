import {IFlower} from "../common/models.ts";
import {Stack} from "@mui/material";

interface IFlowerViewProps {
    flowers: IFlower[];
}

// tools: flower
const FlowerView = ({flowers}: IFlowerViewProps) => {
    return (
        <Stack direction={"row"}>
            {flowers.map(f => (
                <div key={f.id}>
                    {f.type}
                </div>
            ))}
        </Stack>
    );
};

export default FlowerView;