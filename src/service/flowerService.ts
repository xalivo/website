import {useState} from "react";
import {IFlower} from "../common/models.ts";
import {flowerColors, flowerTypes} from "../common/constants.ts";

const useFlowerService = () => {
    const [flowerArray, setFlowerArray] = useState<IFlower[]>([]);

    const setRandomFlowers = () => {
        const futureFlowerArray: IFlower[] = [];

        let types = randomiseArray<string>(flowerTypes);
        let colors = randomiseArray<string>(flowerColors);

        if (types.length > colors.length) {
            types = types.slice(0, colors.length);
        } else if (colors.length > types.length) {
            colors = colors.slice(0, types.length);
        }

        for (let i = 0; i < types.length; i++) {
            futureFlowerArray.push({id: i, type: types[i], color: colors[i]});
        }

        console.log(futureFlowerArray);

        setFlowerArray(futureFlowerArray);
    }

    const randomiseArray = <T>(array: T[]): T[] => {
        const arrayCopy = [...array];
        let currentIndex = flowerArray.length;

        while (currentIndex != 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
                arrayCopy[randomIndex], arrayCopy[currentIndex]];
        }

        return arrayCopy;
    }

    const reset = () => {
        setFlowerArray([]);
    }

    return {flowerArray, setRandomFlowers, reset};
}

export {useFlowerService};