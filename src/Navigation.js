import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Property } from './pages/Property';
import { NotFound } from './pages/NotFound';
import { Account } from './pages/Account';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import { Singup } from './pages/Singup';
import { Register } from './pages/Register';

export const Navigation = () =>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Property' element={<Property/>} /> 
            <Route path='/Account' element={<Account/>} /> 
            <Route path='/Favorites' element={<Favorites/>} /> 
            <Route path='/Login' element={<Login/>} /> 
            <Route path='/Singup' element={<Singup/>} /> 
            <Route path='/Register' element={<Register/>} /> 
           
            <Route path='*' element={<NotFound picture={require("./pages/NotFound/imagen/error-4040-768x469.webp")}/>} /> 
        </Routes>
    </BrowserRouter>
)