import { useContext } from "react";
import { PersonContext } from "../provider/personProvider";

const TitleLabel = () => {

    const {state} = useContext(PersonContext)

    const {firstname, lastname} = state;

    return (
        <h2>Hi {firstname} {lastname}</h2>
    )
}

export default TitleLabel; 