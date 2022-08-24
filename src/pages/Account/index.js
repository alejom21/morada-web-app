import { useContext } from 'react';
import { Button } from '../../components/Button';
import {Page} from '../../components/Page'
import { UserContext } from '../../contexts/UserContext';
import { PageTitle, FooterFixed } from '../../globalStyles';

export const Account = () =>{

    const { user, setUser } = useContext(UserContext);
    //const isAuth = false;
    
    const UserInfo = () =>(
        <div>
            <h3>{user.name}</h3>
            <h5>{user.phone}</h5>
            <p>{user.email}</p>
            <hr />
            <FooterFixed>
                <Button label="Cerrar sesion" onPress={ () => {alert('cerrar sesion')}}/>
            </FooterFixed>
        </div>
    )

    const UserUnauthorized = () =>(
        <div>
            <h2>No autenticado</h2>
            <p>Para acceer a tu perfil de usuario debes iniciar sesion</p>
            <hr />
            <Button label="Iniciar Sesion" linkto="/Login" />
        </div>
    )

    return (
        <Page>
            <PageTitle> Mi cuenta</PageTitle>
            {
                user.isAuthenticated ? <UserInfo /> : <UserUnauthorized />
            }
        </Page>
    )
};