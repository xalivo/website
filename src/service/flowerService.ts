import {useState} from "react";
import {IFlower} from "../common/models.ts";
import {flowerColors, flowerTypes} from "../common/constants.ts";

const useFlowerService = () => {
    const [flowerArray, setFlowerArray] = useState<IFlower[]>([]);

    const setRandomFlowers = (count: number = 5) => {
        const futureFlowerArray: IFlower[] = [];

        for (let i = 0; i < count; i++) {
            const typeIndex = Math.floor(Math.random() * flowerTypes.length);
            const colorIndex = Math.floor(Math.random() * flowerColors.length);

            futureFlowerArray.push({id: i, type: flowerTypes[typeIndex], color: flowerColors[colorIndex]});
        }

        setFlowerArray(futureFlowerArray);
    }

    const removeById = (id: number) => {
        const newArray = flowerArray.filter(x => x.id !== id);
        setFlowerArray(newArray);
    }

    const reset = () => {
        setFlowerArray([]);
    }

    return {flowerArray, setRandomFlowers, removeById, reset};
}

export {useFlowerService};