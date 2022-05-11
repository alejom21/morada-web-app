import {Page} from '../../components/Page'
import { FormControl, PageTitle } from '../../globalStyles';
import { Button, link } from "../../components/Button"

export const Register = () =>(
    <Page hideMenu>
            
        <PageTitle>Registro</PageTitle>
        <br />
        <form>
            <FormControl>
                <label>Nombre Completo</label>
                <input type="text" required/>
            </FormControl>
            <br />
            <FormControl>
                <label>Corre Electronico</label>
                <input type="email" required/>
            </FormControl>
            <br />
            <FormControl>
                <label>ID</label>
                <input type="number" required/>
            </FormControl>
            <br />
            <FormControl>
                <label>ingrese Contraseña</label>
                <input type="password" required/>
            </FormControl>
            <br />
            <FormControl>
                <label>confirme Contraseña</label>
                <input type="password" required/>
            </FormControl>
            <br />
            <FormControl>
                <label>Telefono</label>
                <input type="tel" required />
            </FormControl>
            <Button label="Registrarme" linkto="/" />
        </form>
    
    </Page>
);