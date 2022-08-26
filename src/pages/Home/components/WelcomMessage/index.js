import {WelcomeMesaageWrapper} from "./styles";
import {FaHandPeace } from "react-icons/fa";
import { useContext } from "react";
import { SampleContext } from "../../../../contexts/SampleContext";
import { UserContext } from "../../../../contexts/UserContext";

/*
export const WelcomeMesaage = () => (
    <Fragment>
        <WelcomeMesaageWrapper>
            
            const sampleValue = useContext(SampleContext); 
            <h3>Find</h3>
            <div class="flex">
                <p>best place <strong class="palbraResaltada">nearby</strong></p> 
                <div class="h">
                    
                    <FaHandPeace />
                </div>
                
            </div>
        </WelcomeMesaageWrapper>
            
    </Fragment>
)*/

export const WelcomeMesaage = () => {
    //const sampleValue = useContext(SampleContext);
    const { user, setUser } = useContext(UserContext);

    return(
    <WelcomeMesaageWrapper>
    
        <h3>Find</h3>
        <div className="flex">
            <p>best place <strong className="palbraResaltada">nearby</strong></p> 
            <div className="h">
                
                <FaHandPeace />
            </div>
        </div>
                    
        <h3>{user.name}</h3>
        
    </WelcomeMesaageWrapper>
    );
}

