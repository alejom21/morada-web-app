import { Fragment } from "react"
import { Link } from "react-router-dom"
import { ButtonStyled, LinkStyled } from "./styles"

export const Button = ({
    label, 
    onPress, 
    linkto, 
    type = "button", 
    disabled= false
}) => (
    <Fragment>
        { onPress ? (
            <ButtonStyled disabled={disabled} type={type} onClick={onPress} >{ label }</ButtonStyled>
        )   : ( 
            <LinkStyled to={linkto} > { label }</LinkStyled>
        )}
    </Fragment>
);