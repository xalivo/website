import {FLOWER_IMAGE_BASE_URL} from "../common/deploy-config.ts";
import {flowerBees} from "../common/constants.ts";
import {useEffect, useState} from "react";

interface IBeeViewProps {
    initialBeeTop: number;
    initialBeeRight?: number;
    initalBeeIndex?: number;
}

const BeeView = ({initialBeeTop, initialBeeRight, initalBeeIndex}: IBeeViewProps) => {
    const [currentBeeIndex, setCurrentBeeIndex] = useState<number>(initalBeeIndex ?? 0);
    const [beeTop, setBeeTop] = useState<number>(initialBeeTop);
    const [beeRight, setBeeRight] = useState<number>(initialBeeRight ?? 0);

    useEffect(() => {
        const interval = setInterval(moveBee, 1000);
        return () => clearInterval(interval);
    }, [])

    const changeBee = () => {
        setCurrentBeeIndex(prev => prev + 1 === flowerBees.length ? 0 : prev + 1);
    }

    const moveBee = () => {
        setBeeTop(prev => prev === initialBeeTop ? (initialBeeTop - 20) : initialBeeTop);
        const screenWidth = window.innerWidth;
        setBeeRight(prev => prev + 20 >= screenWidth ? 0 : prev + 20);
    }

    return (
        <div>
            <img id={"bee"} width={"30%"} style={{position: "absolute", top: beeTop, right: beeRight, transition: "0.4s ease-in-out"}}
                 src={`${FLOWER_IMAGE_BASE_URL}${flowerBees[currentBeeIndex]}.png`}
                 onClick={changeBee} />
        </div>
    );
};

export default BeeView;