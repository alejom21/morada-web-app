import {IoPricetag} from 'react-icons/io5';
import { getBusinessTypeLabel } from '../../utils/GetDataConstants';
import { PropertyBusinessTypeWrapper } from './styles';

export const PropertyBusinessType = ({businessType}) =>(
    <PropertyBusinessTypeWrapper>
        <IoPricetag />
        <p>{getBusinessTypeLabel(businessType)}</p>
    </PropertyBusinessTypeWrapper>

)