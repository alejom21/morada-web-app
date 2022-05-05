import { PrecioType } from "../../../../components/PrecioType";
import { PropertyBusinessType } from "../../../../components/PropertyBusinessType";
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { SubTitle } from "../../../../globalStyles";
import { ImageWrapper, PropertyCardWrapper, PropertyInfoWrapper } from "./styles";

export const PropertyCard = () =>(
    <PropertyCardWrapper>
        <ImageWrapper>
            <img alt="apartamento" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/284649054.jpg?k=1de619d25f769cac36f3d4f658eaeeeb1f357dcc4f60c45227b65744f58bd76d&o=&hp=1"/>
        </ImageWrapper>

        <PropertyInfoWrapper>
            <h3>Apartamento en Laureles</h3>
            
            <SubTitle>
            <p>Laureles, Medellin</p>
            </SubTitle>
            <PropertyTypeLabel/>
            <PropertyBusinessType />
            <PrecioType />
        </PropertyInfoWrapper> 
    </PropertyCardWrapper>
)