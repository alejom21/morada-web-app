import { Fragment } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer} from "./styles"

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
        <PropertyTypesContainer>

        
        {
            PropertyTypes.map(item => 
            <PropertyTypeButton icon={item.icon} label={item.label} />)

        }
        </PropertyTypesContainer>
    </>

)