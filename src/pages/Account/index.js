import { Button } from '../../components/Button';
import {Page} from '../../components/Page'
import { PageTitle, FooterFixed } from '../../globalStyles';

export const Account = () =>{

    const isAuth = false;
    
    const UserInfo = () =>(
        <div>
            <h3>Alejandro</h3>
            <h5>1001005085</h5>
            <p>mejiatabares.a@gmail.com</p>
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
                isAuth ? <UserInfo /> : <UserUnauthorized />
            }
        </Page>
    )
};