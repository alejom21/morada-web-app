
import { BrowserRouter } from "react-router-dom";
import { SampleContext } from "./contexts/SampleContext";
import { UserContextStore } from "./contexts/UserContext";
import { GlobalStyle } from "./globalStyles";
import { Navigation } from "./Navigation";


export const App = () =>(
    <BrowserRouter>
        <SampleContext.Provider value={'Alejo'}>
            <UserContextStore>
                <GlobalStyle />
                <Navigation />
            </UserContextStore>
        </SampleContext.Provider>      
    </BrowserRouter>    
);