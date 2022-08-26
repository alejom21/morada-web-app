import { useState, useEffect, useContext } from "react";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";

import { Image2Wrapper, 
    PropertyInfo2Wrapper,  
    PrecioType2,
     } from "./styles"


import { PropertyTypeLabel } from "../../components/PropertyTypeLabel";
import { SubTitle } from "../../globalStyles";
import {  useParams } from "react-router-dom";
import { getStaticImage } from "../../utils/StaticImage";
import { UserContext } from "../../contexts/UserContext";
import { Profile } from "../Home/components/Profile";
import { getCityZoneLabel, getDescription, getShortDescription } from "../../utils/GetDataConstants";
import { getCurrencyFormat } from "../../utils/CurrencyFormat";
import { Page } from "../../components/Page";


export const Favorites = () =>{

    const {idFavorite} = useParams();
    const {user} = useContext(UserContext);

    const [favorite, setFavorite] = useState(null);

    useEffect(() => {
        //acciones a ejecutar
        //requestProperties(idProperty);
        getPropertyFavorite();
        //getFvoriteInfo();
    });

    const getPropertyFavorite = async () => {
        try {
            const response = await requestHttp({ 
                method: HTTP_VERBS.GET,
                endpoint: `/favorites/${idFavorite}`,
                
            });
            const propertyData = response.data.user;
            setFavorite(propertyData);
            console.log('user', idFavorite);
        } catch (error) {
            console.log('error', error);
        }
    }

    if(favorite !== null) {
        return(
            <Page >
                <Profile name={"Alejandro Mejia Tabares"} picture={require("../Home/components/Profile/imagenes/imagen.jpg")}/>
                
                <Image2Wrapper >
                        <img alt="imagen propiedad" src={getStaticImage(favorite.mainImage)} />
                        <PropertyInfo2Wrapper>
                            <h3>{favorite.title}</h3>
                            <SubTitle>{getCityZoneLabel(favorite.city, favorite.zone)}</SubTitle>
                            <PropertyTypeLabel  typeId={favorite.propertyType}></PropertyTypeLabel>
                            <PrecioType2 >
                                <p>{getCurrencyFormat(favorite.value)}</p>
                            </PrecioType2>
                            <detalleWrapper>
                                <h3>Descripcion Corta</h3>{getShortDescription(favorite.shortDescription)}
                                <br/>
                                <br/>
                                <br/>
                                <h3>Descripcion </h3>{getDescription(favorite.description)}
                            </detalleWrapper> 
                        </PropertyInfo2Wrapper>
                </Image2Wrapper>
                
                <br />
            </Page >
            
        );
    } 
    
}


/*import { useEffect } from 'react';
import {Page} from '../../components/Page'
import { requestHttp } from '../../utils/HttpRequest';
import { Profile } from '../Home/components/Profile';
import { PropertyCard } from '../Home/components/PropertyCard';
import { PropertyTypeButton } from '../Home/components/PropertyTypeButton';
import { PropertyTypesContainer } from '../Home/styles';



/*useEffect(() => {
    requestProperties();
}, []);*/



/*export const Favorites = () =>{
    
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        //acciones a ejecutar
        requestFavorite();
    });

    const requestFavorite = async () => {
        try {
            
            const response = await requestHttp({ 
                method: HTTP_VERBS.GET,
                endpoint: '/properties',
            });
            const propertyData = response.data;
            setFavorites(response.data);
            console.log(response)
        } catch (error) {
            // TODO
        }
    };
    
    const makeFavoritesFilter = () => {
        const filters = {};
        if (PropertyTypeSelected !== ALL_PROPERTIES_TYPES) {
            filters['propertyType'] = PropertyTypeSelected;
        }
        return filters;
    }

    return(
        
        <Page>
            <Profile name={"Alejandro Mejia Tabares"} picture={require("./components/Profile/imagenes/imagen.jpg")}/>
            <h3>Favorites</h3>
            <PropertyTypesContainer>
                {PropertyTypes.map((item, key) => (
                    <PropertyTypeButton 
                    selected={PropertyTypeSelected == item.id}
                    icon={item.icon} 
                    label={item.label} 
                    id={item.id}
                    onPress={propertyTypeHandler}
                    key={key}
                    />
                ))}
            </PropertyTypesContainer>

            {
                properties.map((item, key) =>
                 /*<p>Hola {item._id}-{key}</p>*/
    /*             <PropertyCard {...item} key={key}/> 
                )
            }
            
        </Page>
    );
};*/