import {useState} from "react";

const useFlowerService = () => {
    const [flowerArray, setFlowerArray] = useState([1, 2, 3, 4, 5]);

    const randomiseFlowerArray = () => {
        const arrayCopy = [...flowerArray];
        let currentIndex = flowerArray.length;

        while (currentIndex != 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
                arrayCopy[randomIndex], arrayCopy[currentIndex]];
        }

        setFlowerArray(arrayCopy);
    }

    return {flowerArray, randomiseFlowerArray};
}

export {useFlowerService};