import { useState } from 'react';
import {Page} from '../../components/Page'
import { FormControl, FormControlInput, PageTitle, FormControlAccion } from '../../globalStyles';
import { Button, link } from "../../components/Button"
import { ButtonIcon } from '../../components/Buttonicon';
import { IoEye, IoEyeOff} from 'react-icons/io5'


export const Login = () =>{

    //hook
    const [visblePass, setVisiblePass] = useState(false);


    const tooglePasswordVisible = () => {
        setVisiblePass(!visblePass);
    }

    return (
        <Page hideMenu>
            <PageTitle>Iniciar Sesion {visblePass ?"true": "false"}</PageTitle>
            <br />
            <form>
                <FormControl>

                    <FormControlInput>
                        <label>Correo electronico</label>
                        <input type="email" />
                    
                    </FormControlInput>
                </FormControl>
                <br />
                <FormControl>
                    <FormControlInput>
                        <label>Contraseña</label>
                        <input type={visblePass ? "text" : "password"} />
                    </FormControlInput>
                    <FormControlAccion>
                        <ButtonIcon icon={visblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible}/>
                    </FormControlAccion>
                </FormControl>
                <Button label="ingresar" onPress= {() => alert('Iniciar sesion')} />
            </form>
            <br />
            <h5>¿Aun no tienes cuenta?</h5>
            <Button label="Registrarme" linkto="/Register" />
    
        </Page>
    )
};