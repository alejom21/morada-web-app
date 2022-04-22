import { Component, Fragment } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer} from "./styles"
import { Profile} from "./components/Profile";
import { WelcomeMesaage } from "./components/WelcomMessage";
import styledComponents from "styled-components";

const PropertyTypes = [
    {icon: 'icono-apartamento', label: 'Apartamentos'},
    {icon: 'icono-casa', label: 'Casas'},
    {icon: 'icono-lote', label: 'Lotes'},
    {icon: 'icono-finca', label: 'Fincas'},
    {icon: 'icono-local', label: 'Locales'}
]

export const Home = () => (
    <>
        <h1>home - morada</h1>
        <Profile name={"Alejandro Mejia Tabares"} picture={require("./components/Profile/imagenes/imagen.jpg")}/>
        <WelcomeMesaage />
        <PropertyTypesContainer>
            {
                PropertyTypes.map(item => 
                <PropertyTypeButton icon={item.icon} label={item.label} />)

            }
        </PropertyTypesContainer>
    </>

)