import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer} from "./styles"
import { Profile} from "./components/Profile";
import { WelcomeMesaage } from "./components/WelcomMessage";
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation } from "react-icons/io5";
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";

const PropertyTypes = [
    {icon: IoBusiness, label: 'Apartamentos'},
    {icon: IoHome, label: 'Casas'},
    {icon: IoMap, label: 'Lotes'},
    {icon: IoPrism, label: 'Fincas'},
    {icon: IoLocation, label: 'Locales'}
]

export const Home = () => (
    <Page>
        <Profile name={"Alejandro Mejia Tabares"} picture={require("./components/Profile/imagenes/imagen.jpg")}/>
        <WelcomeMesaage />
        <PropertyTypesContainer>
            {
                PropertyTypes.map(item => 
                <PropertyTypeButton icon={item.icon} label={item.label} />)

            }
        </PropertyTypesContainer>

        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
    </Page>

)