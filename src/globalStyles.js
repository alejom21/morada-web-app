import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "lato";
    }
`;

export const PageTitle = styled.h1`
    font-size: 2.8em;
    color: #222;
    font-weight: 300;

`;

export const SubTitle =styled.p`
    color: #ccc;
    font-size: 1.0em;
    text-transform: capitalize;
    margin: 0;
    margin-top: 3px;
`;

// form styles
export const FormControl = styled.div`
    width: 100%;
    margin: 5px 0;
    border-radius: 6px;
    background-color: #f2f2f2;
    padding: 5px 10px;
    label{
        display: block;
        font-size: 0.95em;
        color: #222;
        font-weight: 500;
    }
    input[type="email"], input[type="password"] {
        display: block;
        width: 100%;
        font-size: 1.1em;
        padding: 5px 10px;
        margin: 0px;
        background-color: transparent;
        border: none;
        outline: none;
    }
`