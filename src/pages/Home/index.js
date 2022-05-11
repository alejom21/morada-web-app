import { useState, useEffect } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer} from "./styles"
import { Profile} from "./components/Profile";
import { WelcomeMesaage } from "./components/WelcomMessage";
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation } from "react-icons/io5";
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";


const PropertyTypes = [
    {id: 1, icon: IoBusiness, label: 'Apartamentos'},
    {id: 2, icon: IoHome, label: 'Casas'},
    {id: 3, icon: IoMap, label: 'Lotes'},
    {id: 4, icon: IoPrism, label: 'Fincas'},
    {id: 5, icon: IoLocation, label: 'Locales'}
]

export const Home = () => {

    const [PropertyTypeSelected, setPropertyTypeSelected] =useState(0);

    const propertyTypeHandler = (id) => {
        setPropertyTypeSelected(id);
    }

    useEffect(() => {
        //acciones a ejecutar
        console.log('PropertyTypeSelected ', PropertyTypeSelected )
    }, [PropertyTypeSelected]);

    return(
        
        <Page>
            <Profile name={"Alejandro Mejia Tabares"} picture={require("./components/Profile/imagenes/imagen.jpg")}/>
            <WelcomeMesaage />
            <PropertyTypesContainer>
                {
                    PropertyTypes.map(item => 
                    <PropertyTypeButton selected={PropertyTypeSelected == item.id}
                     icon={item.icon} 
                     label={item.label} 
                     id={item.id}
                     onPress={propertyTypeHandler}
                    />)

                }
            </PropertyTypesContainer>

            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
        </Page>
    )

}