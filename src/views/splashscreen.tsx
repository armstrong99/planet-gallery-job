import {useState} from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { SPLASH, OVERLAY } from '../components/styledComponents/splash.style'

export interface SPLASHSCREENProps {
    
}


 
const SPLASHSCREEN: React.FC<SPLASHSCREENProps> = () => {

 const [switchScreen, setSwitchScreen] = useState<string>('')

    const history = useHistory()

    useEffect(() => {
            setTimeout(() => {
                    setSwitchScreen("/gallery")
            }, 5000);
    },[])

    useEffect(() => {
        if(switchScreen === "/gallery") {
            history.push(switchScreen) 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[switchScreen]) 


    return (
        <>

    <SPLASH>

        <OVERLAY className="">
            <img src="https://www.planeteria.com/wp-content/uploads/2021/01/Group-239.svg" className="h-40 w-40" alt="splash screen" />
            
        </OVERLAY>




        
    </SPLASH>

        </>
      );
}
 
export default SPLASHSCREEN;