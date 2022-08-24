import { useContext, useState } from 'react';
import {Page} from '../../components/Page'
import { 
    FormControl, 
    FormControlInput, 
    PageTitle, 
    FormControlAccion 
} from '../../globalStyles';
import { Button, link } from "../../components/Button";
import { ButtonIcon } from '../../components/Buttonicon';
import { IoEye, IoEyeOff} from 'react-icons/io5'
import { HTTP_VERBS, requestHttp } from '../../utils/HttpRequest';
import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from '../../utils/SwAlert';
import {useNavigate} from 'react-router-dom';
import { setToken } from '../../utils/TokenLS';
import { UserContext } from '../../contexts/UserContext';

export const Login = () =>{

    const {user, setUser} = useContext(UserContext);

    //hook
    const [visblePass, setVisiblePass] = useState(false);
    const navigate = useNavigate();
    const { 
        register, 
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm({ mode: 'onChange'});

    const tooglePasswordVisible = () => {
        setVisiblePass(!visblePass);
    }

    const onSubmitLogin = (data) => {
        console.log('data', data);
        loginRequest(data);
    };

    const loginRequest = async (data) =>{
        try {
        const response = await requestHttp(
            { 
                endpoint: '/users/login', 
                body: data 
            }
        );
        //console.log(response); 
        const {data: dataResponse} = response;
        //await requestGetUserInfo(dataResponse.token);
        setToken(dataResponse.token);
        showAlert(
            'Bienvenido', 
            "Validacion Exitosa", 
            SW_ICON.SUCCESS, 
            () => { navigate('/') }
        );
        } catch (error) {
            console.log('error', error)
            showAlert('Error', "credenciales incorrectas", SW_ICON.ERROR);
        }
    };

   /* const requestGetUserInfo = async (token) => {
        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: '/users/info',
                token
            });
            const {data} = response; 
            setUser({
                name: data.user.name,
                phone: data.user.phone,
                role: data.user.role,
                identification: data.user.document,
                email: data.user.email,
                isAuthenticated: true
            });
        } catch (error) {
            console.log('error', error)
        }
    }*/

    return (
        <Page hideMenu>
            <PageTitle>Iniciar Sesion {visblePass ?"true": "false"}</PageTitle>
            <br />
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <FormControl>
                    <FormControlInput>
                        <label>Correo electronico</label>
                        <input 
                        type="email" 
                        {...register("email", {required: true, pattern: /\S+@\S+\.\S+/})} 
                        
                        />
                        { errors.email?.type ==='required' && <span>Este campo es requerido</span>}
                        { errors.email?.type ==='pattern' && <span>Ingrese un correo valido</span>}
                    </FormControlInput>
                </FormControl>
                <br />
                <FormControl>
                    <FormControlInput>
                        <label>Contraseña</label>
                        <input 
                            type={visblePass ? "text" : "password"} 
                            {...register("password", {required: true})}
                        />
                    { errors.password?.type ==='required' && <span>El campo contraseña es requerido</span>}
                    
                    </FormControlInput>
                    <FormControlAccion>
                        <ButtonIcon icon={visblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible}/>
                    </FormControlAccion>
                </FormControl>
            { isValid ? "valid": "no valid"}
            <Button disabled={!isValid} type="submit" onPress={ () => {} } label="ingresar"  />
            </form>
            <br />
            <h5>¿Aun no tienes cuenta?</h5>
            <Button label="Registrarme" linkto="/Register" />
    
        </Page>
    )
};