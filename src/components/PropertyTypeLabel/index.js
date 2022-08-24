import { getPropertyTypeLabel } from "../../utils/GetDataConstants";
import { PropertyTypeLabelWrapper } from "./styles";


export const PropertyTypeLabel = ({ typeId }) =>(
    <PropertyTypeLabelWrapper>
        <p>{ getPropertyTypeLabel(typeId) }</p>
    </PropertyTypeLabelWrapper>
)