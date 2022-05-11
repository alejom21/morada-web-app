import {IconWrapper, PropertyTypeButtonWrapper} from "./Styles";

export const PropertyTypeButton = ({ icon:Icon, id, label, selected, onPress }) => (
    <PropertyTypeButtonWrapper onClick={() => onPress(id)} selected={selected}>
        <IconWrapper selected={selected}>
            <Icon />
        </IconWrapper>
        <p>{label}</p>
    </PropertyTypeButtonWrapper>

)