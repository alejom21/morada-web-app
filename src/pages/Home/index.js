import { useState, useEffect, useContext } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer} from "./styles";
import { Profile} from "./components/Profile";
import { WelcomeMesaage } from "./components/WelcomMessage";
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation } from "react-icons/io5";
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";
import { SampleContext } from "../../contexts/SampleContext";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";

const ALL_PROPERTIES_TYPES=0;
const PropertyTypes = [
    {id: 1, icon: IoBusiness, label: 'Apartamentos'},
    {id: 2, icon: IoHome, label: 'Casas'},
    {id: 3, icon: IoMap, label: 'Lotes'},
    {id: 4, icon: IoPrism, label: 'Fincas'},
    {id: 5, icon: IoLocation, label: 'Locales'}
];

export const Home = () => {

    const [PropertyTypeSelected, setPropertyTypeSelected] =useState(0);
    const sampleValue = useContext(SampleContext);
    const [properties, setProperties] = useState([]);
    
    const propertyTypeHandler = (idNewSelected) => {
        /*if (PropertyTypeSelected == idNewSelected) {
            setPropertyTypeSelected(ALL_PROPERTIES_TYPES);
        }else {
            setPropertyTypeSelected(idNewSelected);
        }*/
        //
        setPropertyTypeSelected(PropertyTypeSelected == idNewSelected 
                                ? ALL_PROPERTIES_TYPES : idNewSelected);
    };

    useEffect(() => {
        //acciones a ejecutar
        requestProperties();
    }, [PropertyTypeSelected]);

    /*useEffect(() => {
        requestProperties();
    }, []);*/

    const requestProperties = async () => {
        try {
            
            const response = await requestHttp({ 
                method: HTTP_VERBS.GET,
                endpoint: '/properties',
                params: makePropertiesFilter()
            });
            setProperties(response.data.properties);
        } catch (error) {
            // TODO
        }
    };

    const makePropertiesFilter = () => {
        const filters = {};
        if (PropertyTypeSelected !== ALL_PROPERTIES_TYPES) {
            filters['propertyType'] = PropertyTypeSelected;
        }
        return filters;
    }

    return(
        
        <Page>
            <Profile name={"Alejandro Mejia Tabares"} picture={require("./components/Profile/imagenes/imagen.jpg")}/>
            <WelcomeMesaage />
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
                 <PropertyCard {...item} key={key}/> 
                )
            }
            
        </Page>
    );
};