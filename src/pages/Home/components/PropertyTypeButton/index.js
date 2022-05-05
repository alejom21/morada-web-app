import {IconWrapper, PropertyTypeButtonWrapper} from "./Styles";

export const PropertyTypeButton = ({ icon:Icon, label }) => (
    <>
        <PropertyTypeButtonWrapper>
            <IconWrapper>
                <Icon />
            </IconWrapper>
            <p>{label}</p>
        </PropertyTypeButtonWrapper>
    </>
    
)