import FunctionComponent from "./FunctionComponent.tsx";

interface IRedirectProps {
    url: string;
}

const Redirect = ({url}: IRedirectProps) => {

    const navigateToExternalSite = () => {
        window.location.href = url;
    }

    return (
        <FunctionComponent func={navigateToExternalSite}/>
    );
};

export default Redirect;