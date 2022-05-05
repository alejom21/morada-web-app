import { IoHome, IoPerson, IoStar } from 'react-icons/io5';
import { MenuItem } from './MenuItem';
import { MenuWrapper } from './styles';

const MenuItems =[
    {
        icon: IoHome,
        label: 'Inicio',
        path: '/'
    },
    {
        icon: IoStar,
        label: 'Favoritos',
        path: '/favorites'
    },
    {
        icon: IoPerson,
        label: 'Perfil',
        path: '/account'
    },
]

export const Menu = () =>(
    <MenuWrapper>
        {
            MenuItems.map( item => <MenuItem {...item} />)
        }
        
    </MenuWrapper>
)