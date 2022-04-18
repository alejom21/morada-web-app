import {PropertyTypeButtonWrapper} from "./Styles";
import {IoAmericanFootballOutline } from "react-icons/io5";

export const PropertyTypeButton = ({ icon, label }) => (
    <>
        <PropertyTypeButtonWrapper>
            < IoAmericanFootballOutline />
            <p>{label}</p>
        </PropertyTypeButtonWrapper>
    </>
    
)