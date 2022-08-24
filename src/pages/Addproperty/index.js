import {Page} from '../../components/Page'
import { FormControl, PageTitle } from '../../globalStyles';
import { Button, link } from "../../components/Button"

export const Addproperty = () =>(
    <Page >
            
        <PageTitle>Registro de vivienda </PageTitle>
        <br />
        <form>
            <FormControl>
                <label>Nombre Residencia</label>
                <input type="text" required/>
            </FormControl>
            <br />
            <FormControl>
                <label>Ubicacion</label>
                <input type="text" required/>
            </FormControl>
            <br />
            <FormControl>
                <label>Descripcion</label>
                <input type="text" required/>
            </FormControl>
            <br />
            <FormControl>
                <label>Precio</label>
                <input type="text" required/>
            </FormControl>
            <br />
            <FormControl>
                <label>¿ Venta o arrendamiento ?</label>
                <input type="text" required/>
            </FormControl>
            <br />
            <FormControl>
                <label>Aqui la imagen</label>
            </FormControl>
            <br/>
            <Button label="Registrar Vivienda" linkto="/" />
        </form>
    
    </Page>
);