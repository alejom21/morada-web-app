import { Link } from "react-router-dom"
import { ButtonStyled, LinkStyled } from "./styles"

export const Button = ({label, onPress, linkto}) => {
    return (
        <>
            {
                onPress 
                ? <ButtonStyled onClick={onPress} >{ label }</ButtonStyled>
                :<LinkStyled to={linkto} > { label }</LinkStyled>
            }
        </>
        
    )
}