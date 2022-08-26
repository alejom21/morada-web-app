import { useState, useEffect, useContext } from "react";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";

import { Page2 } from "../../components/Page2";
import { PropertyContainer } from "./styles"
import { Image2Wrapper, 
        PropertyInfo2Wrapper, 
        detalleWrapper, 
        PrecioType2,
         } from "./styles"
import { PropertyTypeLabel } from "../../components/PropertyTypeLabel";
import { SubTitle } from "../../globalStyles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getStaticImage } from "../../utils/StaticImage";
import { UserContext } from "../../contexts/UserContext";
import { Profile } from "../Home/components/Profile";
import { getCityZoneLabel, getDescription, getShortDescription } from "../../utils/GetDataConstants";
import { getCurrencyFormat } from "../../utils/CurrencyFormat";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from "../../utils/SwAlert";
import { getToken, removeToken } from "../../utils/TokenLS";


//const PROPERTIE=0;

export const Property = () => {
    
    const {idProperty} = useParams();
    //const[propertyTypeSelected, setpropertyTypeSelected] =useState(0);
    //const [property, setProperty] = useState([]);
    //const [PropertyIDSelected] =useState(0);
    //const [property, setProperty] = useState({title:"",property:{id:0, label:"null"},businessType:{id:0, label:"null"}});
    /*const propertyHandler = (id) => {
        setpropertyTypeSelected(id);
    }*/

    const {user} = useContext(UserContext);
    
    const [property, setProperty] = useState(null);
    

    useEffect(() => {
        //acciones a ejecutar
        //requestProperties(idProperty);
        getPropertDetail();
        //getFvoriteInfo();
    });

    const getPropertDetail = async () => {
        try {
            const response = await requestHttp({ 
                method: HTTP_VERBS.GET,
                endpoint: `/properties/${idProperty}`,
                
            });
            const propertyData = response.data.property;
            setProperty(propertyData);
            console.log('property', idProperty);
        } catch (error) {
            console.log('error', error);
        }
    }

    
    /*const navigate = useNavigate();
    const { 
        register, 
        handleSubmit,
    } = useForm({ mode: 'onChange'});

    const onSubmitFavorite = (data) => {
        console.log('data', data);
        FavoriteRequest(data);
    };
    
    const FavoriteRequest = async (data) =>{
        try {
        const response = await requestHttp(
            { 
                endpoint: '/favorites/agregate', 
                body: data 
            }
        );
        console.log(response); 
        showAlert(
            "Agregada a Favoritos Con Exitoso", 
            SW_ICON.SUCCESS, 
            () => {navigate('/')}
        );
        } catch (error) {
            console.log('error', error)
            showAlert('Error', "Registro incorrecto", SW_ICON.ERROR);
        }
    };*/

    const [PropertyTypeSelected, setPropertyTypeSelected] =useState(0);

    const propertyTypeHandler = (idNewSelected) => {
        /*if (PropertyTypeSelected == idNewSelected) {
            setPropertyTypeSelected(ALL_PROPERTIES_TYPES);
        }else {
            setPropertyTypeSelected(idNewSelected);
        }*/
        //
        setPropertyTypeSelected(
            PropertyTypeSelected == idNewSelected 
        );
    };

    const location = useLocation();
    const {use, setUser} = useContext(UserContext);
    useEffect(() => {
        checkUserAuthenticated();
    }, [location]);

    const checkUserAuthenticated =  () => {
        const token = getToken();
        if (token && !user.isAuthenticated) {
            // autologin -> obtener los datos del usuario
            requestFavorite(token);
        }
    };
    const requestFavorite = async (data) => {

        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: '/users/info',
                
            });
            const {data} = response; 
            setUser({
            });
        } catch (error) {
            console.log('error', error);
            removeToken();
        }
    }

    if(property !== null) {
        return(
            <Page2 >
                <Profile name={"Alejandro Mejia Tabares"} picture={require("../Home/components/Profile/imagenes/imagen.jpg")}/>
                <PropertyContainer>
                 <Image2Wrapper >
                        <img alt="imagen propiedad" src={getStaticImage(property.mainImage)} />
                        <PropertyInfo2Wrapper>
                            <h3>{property.title}</h3>
                            <SubTitle>{getCityZoneLabel(property.city, property.zone)}</SubTitle>
                            <PropertyTypeLabel  typeId={property.propertyType}></PropertyTypeLabel>
                            <PrecioType2 >
                                <p>{getCurrencyFormat(property.value)}</p>
                            </PrecioType2>
                            <detalleWrapper>
                                <h3>Descripcion Corta</h3>{getShortDescription(property.shortDescription)}
                                <br/>
                                <br/>
                                <br/>
                                <h3>Descripcion </h3>{getDescription(property.description)}
                            </detalleWrapper> 
                        </PropertyInfo2Wrapper>
                    </Image2Wrapper>
                </PropertyContainer>
                <br />
                <br />
            </Page2 >
            
        );
    } 
    
    /*
    
    
    
            <form  onSubmit={handleSubmit(onSubmitFavorite)}>
                
                <Button type="submit" onPress={ () => {} }  label="Agregar a Favoritos" linkto="/" />
            
            </form>
            
        const getFavoriteInfo = async () => {
        try {
            const response = await requestHttp({
                endpoint: '/favorites/',
                body: {userId: user.userId, propertyId: idProperty}
            });
            const favoriteData = response.data.favorite;
            setFavorite(favoriteData);
        } catch (error) {
            console.log('error', error);            
        }
    }*/

    /*const requestProperties = async (idProperty) => {
        
        try {
            const response = await requestHttp({ 
                method: HTTP_VERBS.GET,
                endpoint: '/properties',
                
            });
            setProperty(response.data);
            console.log('datos', response);
         
        } catch (error) {
            console.log('error', error);
        }
    };*/

    /*if (!property) {
        return(
            <p>Cargando...</p>
        )
    }*/

    
}

/*

{items.map(item => (
                     <p>Id : {item.id} </p>
                     <p>Name : {item.name} </p>
                     <p>Description : {item.description} </p> 
                   ))}




            <PropertyCardDetail {...property}  />
            

{
                property.map((item, key) =>
                 <PropertyCardDetail {...item} key={key} />
                )
            }


<PropertyContainer>
                
                <Image2Wrapper image={property.mainImage}/>
                <PropertyCardDetail {...property}/>

                <div>
                    <SubTitle>Description:</SubTitle>
                    <detalleWrapper>{property.description}</detalleWrapper>
                </div>
                
            </PropertyContainer> 
            
            {
                property.map((item, key) => <PropertyCardDetail key={key} />)
            }
            */