import {useEffect} from "react";

interface IFunctionComponentProps {
    func: () => void;
}

const FunctionComponent = ({func}: IFunctionComponentProps) => {

    useEffect(() => {
        func();
    }, [])

    return (
        <div></div>
    );
};

export default FunctionComponent;
