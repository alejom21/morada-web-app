import { Link } from "react-router-dom";
import { MenuItemWrapper } from "./styles";

export const MenuItem = ({ icon: Icon, label, path}) =>(
    <Link to={path}>
        <MenuItemWrapper>
            <Icon />
            <p>{ label }</p>
        </MenuItemWrapper>
        
    </Link>
)