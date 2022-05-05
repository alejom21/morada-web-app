import {Page} from '../../components/Page'
import { FormControl, PageTitle } from '../../globalStyles';
import { Button } from "../../components/Button"

export const Login = () =>(
    <Page hideMenu>
        <PageTitle>Iniciar Sesion</PageTitle>
        <br />
        <form>
            <FormControl>

                <label>Correo electronico</label>
                <input type="email" />
            </FormControl>
            <br />
            <FormControl>
                <label>Contraseña</label>
                <input type="password" />
            </FormControl>
            <Button label="ingresar" onPress= {() => alert('Iniciar sesion')} />
        </form>
    </Page>
);