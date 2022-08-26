import {Page} from '../../components/Page'
import { FormControl, FormControlInput, PageTitle } from '../../globalStyles';
import { Button, link } from "../../components/Button"

import { requestHttp } from '../../utils/HttpRequest';
import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from '../../utils/SwAlert';
import {useNavigate} from 'react-router-dom';


export const Register = () =>{

    const navigate = useNavigate();
    const { 
        register, 
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm({ mode: 'onChange'});

    const onSubmitRegister = (data) => {
        console.log('data', data);
        RegisterRequest(data);
    };
    
    const RegisterRequest = async (data) =>{
        try {
        const response = await requestHttp(
            { 
                endpoint: '/users/signup', 
                body: data 
            }
        );
        console.log(response); 
        showAlert(
            'Bienvenido', 
            "Registro Exitoso", 
            SW_ICON.SUCCESS, 
            () => {navigate('/')}
        );
        } catch (error) {
            console.log('error', error)
            showAlert('Error', "Registro incorrecto", SW_ICON.ERROR);
        }
    };

    return(
        <Page hideMenu>
                
            <PageTitle>Registro</PageTitle>
            <br />
            <form onSubmit={handleSubmit(onSubmitRegister)}>
                <FormControl>
                    <FormControlInput>
                        <label>Nombre Completo</label>
                        <input 
                            type="text"
                            {...register("name", {required: true})}
                        
                        />
                        { errors.name?.type ==='required' && <span>Este campo es requerido</span>}
                    </FormControlInput>
                </FormControl>
                <br />
                <FormControl>
                    <FormControlInput>
                        <label>Corre Electronico</label>
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
                        <label>ID</label>
                        <input type="number" 
                            {...register("number", {required: true, pattern: '[0-9]', minLength: 5})}
                        />
                        { errors.number?.type ==='required' && <span>Este campo es requerido</span>}
                        { errors.number?.type ==='pattern' && <span>Ingrese un ID de solo numeros</span>}
                        { errors.number?.type ==='minLength' && <span>Ingrese ID valido</span>}
                    </FormControlInput>
                </FormControl>
                <br />
                <FormControl>
                    <FormControlInput>
                        <label>ingrese Contraseña</label>
                        <input type="password" 
                            {...register("password", {required: true})}
                        />
                    { errors.password?.type ==='required' && <span>El campo contraseña es requerido</span>}
                    </FormControlInput>
                </FormControl>
                <br />
                <FormControl>
                    <FormControlInput>
                        <label>confirme Contraseña</label>
                        <input type="password" 
                            {...register("password2", {required: true})}
                        />
                    { errors.password2?.type ==='required' && <span>El campo de confirmacion es requerido</span>}
                                        
                    </FormControlInput>
                </FormControl>
                <br />
                <FormControl>
                    <FormControlInput>
                        <label>Telefono</label>
                        <input type="number" 
                            {...register("tel", {required: true, minLength: 5})}
                        />
                    { errors.tel?.type ==='required' && <span>El campo Telefono es requerido</span>}
                    { errors.tel?.type ==='minLength' && <span>Ingrese Telefono valido</span>}
                    </FormControlInput>
                </FormControl>
            { isValid ? "valid": "no valid"}
            <Button disabled={!isValid} type="submit" onPress={ () => {} }  label="Registrarme" linkto="/" />
            </form>   
                 
        </Page>

    )
    
};