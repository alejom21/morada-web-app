import { PageWrapper } from "./styles";
import { Menu } from "../Menu";

export const Page = ( props) =>(   
    <>
        <PageWrapper> {props.children}</PageWrapper>
        {
            !props.hideMenu &&<Menu />
        }
    </>
    
)