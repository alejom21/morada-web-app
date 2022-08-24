import { createContext, useState } from "react";

const initialState = {
    role: 1,
    name: '',
    phone: '',
    email: '',
    identification: '',
    isAuthenticated: false
};

export const UserContext = createContext(initialState);

export const UserContextStore = (props) => {

    const [user, setUser] = useState(initialState);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}