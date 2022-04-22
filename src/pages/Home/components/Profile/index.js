import {ProfileWrapper} from "./styles";

export const Profile = ({name, picture}) => (
    <>
        <ProfileWrapper>
            <img src={picture} width="45" height="45" border-radius="20%"/>
            
            <h4>{name}</h4>                  
        </ProfileWrapper>

    </>
)