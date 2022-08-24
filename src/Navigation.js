import {
    BrowserRouter,
    Route,
    Routes,
    useLocation
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Property } from './pages/Property';
import { NotFound } from './pages/NotFound';
import { Account } from './pages/Account';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import { Singup } from './pages/Singup';
import { Register } from './pages/Register';
import { Addproperty } from './pages/Addproperty';
import { useContext, useEffect } from 'react';
import { getToken, removeToken } from './utils/TokenLS';
import { UserContext } from './contexts/UserContext';
import { requestHttp, HTTP_VERBS } from './utils/HttpRequest';

export const Navigation = () =>{

    const {user, setUser} = useContext(UserContext);
    const location = useLocation();

    useEffect(() => {
        checkUserAuthenticated();
    }, [location]);

    const checkUserAuthenticated =  () => {
        const token = getToken();
        if (token && !user.isAuthenticated) {
            // autologin -> obtener los datos del usuario
            requestGetUserInfo(token);
        }
    };

    
    const requestGetUserInfo = async (token) => {
        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: '/users/info',
                token
            });
            const {data} = response; 
            setUser({
                name: data.user.name,
                phone: data.user.phone,
                role: data.user.role,
                identification: data.user.document,
                email: data.user.email,
                isAuthenticated: true
            });
        } catch (error) {
            console.log('error', error);
            removeToken();
        }
    }

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Property/:idProperty' element={<Property/>} /> 
            <Route path='/Account' element={<Account/>} /> 
            <Route path='/Favorites' element={<Favorites/>} /> 
            <Route path='/Login' element={<Login/>} /> 
            <Route path='/Singup' element={<Singup/>} /> 
            <Route path='/Register' element={<Register/>} /> 
            <Route path='/Addproperty' element={<Addproperty/>} />             
            <Route path='*' element={<NotFound picture={require("./pages/NotFound/imagen/error-4040-768x469.webp")}/>} /> 
        </Routes>
    );
};