import { Page2Wrapper } from "./styles";
import { Menu } from "../Menu";

export const Page2 = ( props) =>(
    
    <>
    <Page2Wrapper>{props.children}</Page2Wrapper>
    <Menu />
</>
)