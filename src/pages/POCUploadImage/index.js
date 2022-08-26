import { Fragment, useState } from "react";
import { Button } from "../../components/Button";
import { CONTENT_TYPES, requestHttp } from "../../utils/HttpRequest";
import { showAlert, SW_ICON } from "../../utils/SwAlert";

export const POCUploadImage = () => {
 

    const [file, setFile] = useState(null);

    const fileSelectedHandler = (event) => {
        const fileSelected = event.target.files[0];
        setFile(fileSelected);
        
        //requestUploadFile(file);
    };

    const uploadFileHandler = (event) => {
        if (file) {
            requestUploadFile(file);            
        } else {
            showAlert("Error", "Selecciona un archivo", SW_ICON.ERROR);
        }
    } 

    const requestUploadFile = async (file) => {
        try {
            const formData = new FormData();
            formData.append("propertyImage", file);
            const response =await requestHttp({
                endpoint: '/properties/upload',
                contentType: CONTENT_TYPES.MULTIPARTE_FORM_DATA,
                body: formData
            }); 
            showAlert('Archivo cargado', 'El archivo se subio con exito', SW_ICON.SUCCESS)
            console.log('response', response);
        } catch (error) {
            console.log('error', error);
        }
    }

    return(
        <Fragment>
            <input 
                type="file"
                accept="image/png, image/JPG"
                onChange={fileSelectedHandler}
            />
            <br />
            <Button label={"subir Imagen"} onPress={uploadFileHandler}/>
        </Fragment>    
    )
    
};
