import { PrecioTypeWrapper } from "./styles";
import {RiMoneyDollarCircleLine} from 'react-icons/ri';

export const PrecioType = () =>(
    <PrecioTypeWrapper>
        <RiMoneyDollarCircleLine />
        <p><b> 400,000</b></p>
    </PrecioTypeWrapper>
)