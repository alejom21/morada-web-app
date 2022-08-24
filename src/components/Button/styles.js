import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

const BaseButtonStyle = css`
    width: 100%;
    font-size: 1em;
    color: #fff;
    background-color: #4A148C;
    text-align: center;
    border: none;
    border-radius: 6px;
    padding: 9px 0;
    opacity: 0.9;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
`;

export const ButtonStyled = styled.button`
    ${BaseButtonStyle}
    //opacity: ${props => props.disabled ? 0.5 : 1};
    //cursor:  ${props => props.disabled ? "not-allowed" : "pointer"};
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const LinkStyled = styled(Link)`
    ${BaseButtonStyle}
    text-decoration: none;
    display: block;
    padding: 4px 0;
    color: #fff;
    background-color: #828282;
`