import {IoPricetag} from 'react-icons/io5';
import { PropertyBusinessTypeWrapper } from './styles';

export const PropertyBusinessType = ({businessType}) =>(
    <PropertyBusinessTypeWrapper>
        <IoPricetag />
        <p>Venta</p>
    </PropertyBusinessTypeWrapper>

)