import { useState, useEffect, useContext } from "react";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";

import { Page2 } from "../../components/Page2";
import { PropertyContainer } from "./styles"
import { Image2Wrapper, PropertyInfo2Wrapper, detalleWrapper, PropertyBusinessType2, PrecioType2 } from "./styles"
import { PropertyTypeLabel } from "../../components/PropertyTypeLabel";
import { SubTitle } from "../../globalStyles";
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {IoPricetag} from 'react-icons/io5';
import { useParams } from "react-router-dom";
import { getStaticImage } from "../../utils/StaticImage";
import { PropertyCard, PropertyCardDetail } from "../Home/components/PropertyCard";
import { UserContext } from "../../contexts/UserContext";
import { Profile } from "../Home/components/Profile";


const PROPERTIE=0;

export const Property = () => {
    //const[propertyTypeSelected, setpropertyTypeSelected] =useState(0);
    const {user, setUser} = useContext(UserContext);
    //const [property, setProperty] = useState([]);
    const [property, setProperty] = useState({title:"",property:{id:0, label:"null"},businessType:{id:0, label:"null"}});
    
    const {idProperty} = useParams();
    //const [PropertyIDSelected] =useState(0);

    /*const propertyHandler = (id) => {
        setpropertyTypeSelected(id);
    }*/

    useEffect(() => {
        //acciones a ejecutar
        requestProperties(idProperty);
    }, []);
    
    const requestProperties = async (idProperty) => {
        
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
    };

    /*if (!property) {
        return(
            <p>Cargando...</p>
        )
    }*/

    return(
        <Page2 >
            <h1>id {idProperty}</h1>
            <Profile name={"Alejandro Mejia Tabares"} picture={require("../Home/components/Profile/imagenes/imagen.jpg")}/>
            
            
        </Page2>
    );
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