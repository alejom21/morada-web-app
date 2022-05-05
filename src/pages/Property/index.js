
import { Page2 } from "../../components/Page2";
import { PropertyContainer } from "./styles"
import { Image2Wrapper, PropertyInfo2Wrapper, detalle, PropertyBusinessType2, PrecioType2 } from "./styles"
import { PropertyTypeLabel } from "../../components/PropertyTypeLabel";
import { SubTitle } from "../../globalStyles";
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {IoPricetag} from 'react-icons/io5';

export const Property = () => (
    <Page2>
        <PropertyContainer>
            <Image2Wrapper>
                <img alt="apartamento" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/284649054.jpg?k=1de619d25f769cac36f3d4f658eaeeeb1f357dcc4f60c45227b65744f58bd76d&o=&hp=1"/>
            </Image2Wrapper>

            <PropertyInfo2Wrapper>
                <h3>Apartamento en Laureles</h3>
                
                <SubTitle>
                <p>Laureles, Medellin</p>
                </SubTitle>
                <PropertyTypeLabel/>
                <PropertyBusinessType2>
                    <IoPricetag />
                    <p>Venta</p>
                </PropertyBusinessType2>
                <PrecioType2>
                    <RiMoneyDollarCircleLine />
                    <p><b> 400,000</b></p>
                </PrecioType2>
            </PropertyInfo2Wrapper> 
            <detalleWrapper>
                <h1><b>Detalle de la propiedad</b></h1>        
                <p className="des">Casas de 167 m2 y 172 m2. ¿Te gustaría vivir en un Valle de Tranquilidad? Te presentamos a: Loira Casas en San Lucas, 
                    cuenta con una ubicación privilegiada. Cerca de todo lo que necesitas sin alejarte del canto de los pájaros y del aire 
                    fresco de la naturaleza. Casas distribuidas en 2 niveles; en el primer nivel cuenta con zona verde, antejardín, garaje 
                    cubierto, baño social, alcoba de servicio con baño, despensa, zona de ropas, cocina integrada a la zona social ( sala y 
                    comedor), terraza cubierta y un jardín de descanso que alojará experiencias infinitas para ti y los que más quieres. En 
                    el segundo nivel cuenta con 3 alcobas cada una con baño y vestier, zona de linos y estar de alcobas para que compartas 
                    los mejores momentos en familia. Una oportunidad única de vivir en casa, como siempre lo has soñado, con un perfecto 
                    equilibrio.</p>
            </detalleWrapper>
        </PropertyContainer>
    </Page2>
)