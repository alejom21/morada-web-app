import { PropertyBusinessType } from "../../../../components/PropertyBusinessType";
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { SubTitle } from "../../../../globalStyles";
import { getCurrencyFormat } from "../../../../utils/CurrencyFormat";
import { getCityZoneLabel, getDescription, getShortDescription } from "../../../../utils/GetDataConstants";
import { getStaticImage } from "../../../../utils/StaticImage";
import { ImageWrapper, PropertyCardWrapper, PropertyInfoWrapper, PrpertyValueWrapper } from "./styles";

export const PropertyCard = (props) =>(
    <PropertyCardWrapper to={`/property/${props._id}`}>
        <ImageWrapper>
            <img alt="Foto propiedad" src={getStaticImage(props.mainImage)} />
        </ImageWrapper>

        <PropertyInfoWrapper>
            <h3>{props.title}</h3>            
            <SubTitle>
                { getCityZoneLabel(props.city, props.zone)}
            </SubTitle>
            <PropertyTypeLabel typeId={props.propertyType}/>
            <PropertyBusinessType businessType={props.businessType} />
            <PrpertyValueWrapper>
                <p>{getCurrencyFormat(props.value)} </p>
            </PrpertyValueWrapper>
        </PropertyInfoWrapper> 
    </PropertyCardWrapper>

)

export const PropertyCardDetail = ({ title, city, zone, businessType, shortDescription, description}) =>(
    <PropertyCardWrapper >
        
        <PropertyInfoWrapper>
            <h3>{title}</h3>            
            <SubTitle>
                { getCityZoneLabel(city, zone)}
            </SubTitle>
            <PropertyBusinessType businessType={businessType} />
            
            <detalleWrapper>
                {getShortDescription(shortDescription)}
                {getDescription(description)}
            </detalleWrapper> 
        </PropertyInfoWrapper> 
    </PropertyCardWrapper>

)

/*export const PropertyCardDetail = (property) =>(
    <PropertyCardWrapper >
        {console.log("propiedad",property)}

        <PropertyInfoWrapper>
            <h3>{property.title}</h3>            
            <SubTitle>
                { getCityZoneLabel(property.city, property.zone)}
            </SubTitle>
            <PropertyTypeLabel typeId={property.propertyType.label}/>
            <PropertyBusinessType businessType={property.businessType} />
            
            <detalleWrapper>
                {getShortDescription(property.shortDescription)}
                {getDescription(property.description)}
            </detalleWrapper> 
        </PropertyInfoWrapper> 
    </PropertyCardWrapper>

)*/

/*<PrpertyValueWrapper>
                <p>{getCurrencyFormat(props.value)} </p>
            </PrpertyValueWrapper>

            <detalleWrapper>
                {getShortDescription(props.shortDescription)}
                {getDescription(props.description)}
            </detalleWrapper> 
            
                    <ImageWrapper>
            <img alt="Foto propiedad" src={getStaticImage(props.mainImage)} />
        </ImageWrapper>
*/