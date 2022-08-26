import {Page} from '../../components/Page'
import { FormControl, FormControlInput, PageTitle, SubTitle } from '../../globalStyles';
import { Button, link } from "../../components/Button"
import { useEffect, useState } from 'react';
import { showAlert, SW_ICON } from '../../utils/SwAlert';
import { CONTENT_TYPES, HTTP_VERBS, requestHttp } from '../../utils/HttpRequest';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { POCUploadImage } from '../POCUploadImage';

export const Addproperty = () =>{

    const navigate = useNavigate();
    const { 
        register, 
        handleSubmit,
        setValue,
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
                endpoint: '/properties', 
                body: data 
            }
        );
        console.log(response); 
        showAlert(
            'Bienvenido', 
            "Registro Exitoso de Vivienda", 
            SW_ICON.SUCCESS, 
            () => {navigate('/')}
        );
        } catch (error) {
            console.log('error', error)
            showAlert('Error', "Registro incorrecto", SW_ICON.ERROR);
        }
    };
    
    const [mainImage, setImage] = useState(null)
    const [file, setFile] = useState(null);

    const uploadFileHandler = () => {
        if (file) {
            requestUploadFile(file);
        } else {
            showAlert("Error", "Debes cargar una imagen de la propiedad", SW_ICON.ERROR);
        }
    }
    const fileSelectedHandler = (event) => {
        const fileSelected = event.target.files[0];
        setFile(fileSelected);
        
        //requestUploadFile(file);
    };

    const requestUploadFile = async (file) => {
        try {
            const formData = new FormData();
            formData.append("propertyImage", file);
            const response = await requestHttp({
                endpoint: '/properties/upload',
                contentType: CONTENT_TYPES.MULTIPARTE_FORM_DATA,
                body: formData
            });
            showAlert("Archivo cargado", 'El archivo se subio con exito', SW_ICON.SUCCESS);
            console.log('response', response);
            setImage(response.data.fileName);
            console.log('mainImage', response.data.fileName);
        } catch (error) {
            console.log('error', error);
        }
    }


    return (
        <Page hideMenu>
        <PageTitle>Registro de vivienda </PageTitle>
        <br />   
        <FormControlInput>
            <SubTitle>Cargar imagen</SubTitle>
            <input
                type="file"
                accept="image/png, image/JPG"
                onChange={fileSelectedHandler}
            />
            <br></br>
            <br></br>
            <Button
                type="button"
                label="Cargar imagen"
                onPress={uploadFileHandler} />
        </FormControlInput>
        <br /><br />
        <form onSubmit={handleSubmit(onSubmitRegister)}>
            <FormControl>
                <FormControlInput>
                    <label><b>Nombre Residencia</b></label>                
                    <input 
                        type="text"
                        {...register("title", {required: true})}
                                            
                    />
                    { errors.title?.type ==='required' && <span>Este campo es requerido</span>}
                </FormControlInput>
            </FormControl>
            <br />
            <FormControl>
                <FormControlInput>
                    <label><h4>Ciudad y Zona</h4><br />
                    <b>Ciudad #1:</b>   Medellin<br />
                    <b>zones:</b> <br />
                        1: Belen<br />
                        2: Laureles<br />
                        3: Palmas<br />
                        <br /><br />
                    <b>Ciudad #2:</b>Sabaneta<br />
                    <b>zones:</b> <br /> 
                        1: Parque
                        <br /><br />

                    <b>Ciudad #3:</b> Rionegro<br />
                    <b>zones:</b> <br />
                    1: Llano grande
                    <br /><br />   

                    <b>Ciudad #4:</b>  Envigado<br />
                    <b>zones:</b> <br />
                            1: La Paz
                                      
                    <br></br><br></br>
                    </label>
                    <label>Ciudad</label>
                    <input 
                        type="number"
                        {...register("City", {required: true})} 
                    />
                    <br></br><label>Zona</label>
                    <input 
                        type="number"
                        {...register("Zone", {required: true})}
                    
                    />
                    { errors.City?.type ==='required' && <span>Este campo es requerido</span>}
                    { errors.Zone?.type ==='required' && <span>Este campo es requerido</span>}
                </FormControlInput>
            </FormControl>
            <br />
            <br />
            <FormControl>
                <FormControlInput>
                    <label><b>Tipo de propiedad</b> <br></br> </label>
                
                    <select type="number"
                        {...register("propertyType", {required: true})}>
                                <option value="1" defaultValue >Apartamento</option>
                                <option value="2">Casa</option>
                                <option value="3">Lote</option>
                                <option value="4">Finca</option>
                                <option value="5">Local</option>
                    </select>
                    { errors.propertyType?.type ==='required' && <span>Este campo es requerido</span>}
                
                </FormControlInput>
            </FormControl>
            <br />
            <FormControl>
                <FormControlInput>
                    <label><b> businessType</b><br></br></label>
                    <select type="number"
                        {...register("businessType", {required: true})}>
                            <option value="1" defaultValue >Venta</option>
                            <option value="2">Renta</option>
                        </select>
                    { errors.businessType?.type ==='required' && <span>Este campo es requerido</span>}
                </FormControlInput>
            </FormControl>
            <br/>            
            <FormControl>
                <FormControlInput>
                    <label> <b>Valor de la propiedad</b></label>
                    <input 
                        type="number"
                        {...register("value", {required: true})}
                    
                    />
                    { errors.value?.type ==='required' && <span>Este campo es requerido</span>}
                </FormControlInput>
            </FormControl>
            <br/>            
            <FormControl>
                <FormControlInput>
                    <label> <b>Descripcion corta</b></label>
                    <input 
                        type="text"
                        {...register("shortDescription", {required: true})}
                    
                    />
                    { errors.shortDescription?.type ==='required' && <span>Este campo es requerido</span>}
                </FormControlInput>
            </FormControl>
            <br/>            
            <FormControl>
                <FormControlInput>
                    <label> <b>Descripcion detallada</b></label>
                    <input 
                        type="text"
                        {...register("Description", {required: true})}
                    
                    />
                    { errors.Description?.type ==='required' && <span>Este campo es requerido</span>}
                </FormControlInput>
            </FormControl>
            { isValid ? "valid": "no valid"}
            <Button disabled={!isValid} type="submit" onPress={ () => {} } onClick={setValue('mainImage', mainImage)} label="Agregar Propiedad"/>
            
        </form>
    
    </Page>
    )
    
    
};

/*
    const [file, setFile] = useState(null);

    const [mainImage, setMainImage] = useState(null);

    const [cities, setCities] = useState(null);

    const [zones, setZones] = useState([]);

    const navigate = useNavigate();

    const fileSeletedHandler = (event) => {
        const fileSelected = event.target.files[0];
        setFile(fileSelected);
    };

    const uploadFileHandler = () => {
        if (file) {
            requestUploadFile(file);
        } else {
            showAlert("Error", "Debes seleccionar un archivo para cargar", SW_ICON.ERROR);
        }
    }

    const requestUploadFile = async (file) => {
        try {
            const formData = new FormData();
            formData.append("propertyImage", file);
            const response = await requestHttp({
                endpoint: '/properties/upload',
                contentType: CONTENT_TYPES.MULTIPART_FORM_DATA,
                body: formData
            });
            showAlert("Archivo cargado", "El archivo fue cargado con exito", SW_ICON.SUCCESS);
            console.log('response', response);
            setMainImage(response.data.fileName);
            console.log('mainImage', response.data.fileName);
        } catch (error) {
            console.log('error', error);
        }
    }
    useEffect(() => {
        requestCities();
    }, [])

    const requestCities = async () => {
        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: '/cities',
            });
            setCities(response.data.cities);
            console.log('cities', response.data.cities);
        } catch (error) {
            console.log('error', error);
        }
    }

    const requestZones = async (cityId) => {
        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: `/zones/cityZones/${cityId}`
            });
            setZones(response.data.zones);
            console.log('zones', response.data.zones);
        } catch (error) {
            console.log('error', error);
        }
    }

    const {
        register,
        setValue,
        formState: { errors, isValid },
        handleSubmit
    } = useForm({ mode: "onChange" });

    const onChangeChargeZones = (data) => {

        console.log(data.target.value);
        requestZones(data.target.value);
    }

    const onSubmitAddProperty = (data) => {
        createPropertyRequest(data);
        console.log("form data", data);
        console.log("image", mainImage);
    };

    const toogleAddCity = () => {
        navigate('/add-city');
    };
    
    const toogleAddZone = () => {
        console.log("Add Zone")
        navigate('/add-zone');
    };

    const createPropertyRequest = async (data) => {
        try {
            const response = await requestHttp({
                endpoint: "/properties",
                body: data,
            });
            console.log(response);
            showAlert(
                "Registro exitoso",
                "Se ha agregado la nueva propiedad de foma exitosa",
                SW_ICON.SUCCESS,
                () => { navigate('/') }
            );
        } catch (error) {
            console.log("error", error);
            showAlert("Error", "Error en los datos de registro", SW_ICON.ERROR);
        }
    };
    
    /*
        <FormControlInput>
            <SubTitle>Cargar imagen</SubTitle>
            <input
                type="file"
                accept="image/png, image/JPG"
                onChange={fileSeletedHandler}
            />
                <br></br>
                <br></br>
        </FormControlInput>
    */
    