import styled, { keyframes } from 'styled-components'
import {useState} from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export interface SPLASHSCREENProps {
    
}

const animateSplash = keyframes`
    0% {

        background: lightblue url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80)  no-repeat fixed center;
        background-size: cover;
    
    }

    25% {
         background: blue url(https://img.freepik.com/free-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?size=626&ext=jpg)  no-repeat fixed center;
         background-size: cover;

    }

    50% {
         background: lightred url(https://wallpaperaccess.com/full/1101027.jpg)  no-repeat fixed center;
         background-size: cover;

    }

    75% {
         background: limegreen url(https://i.pinimg.com/originals/14/c3/c5/14c3c5c519398e5c7f897d4ef082a8e1.jpg)  no-repeat fixed center;
         background-size: cover;

    }

    100% {
         background: silver url(https://wallpaperaccess.com/full/1624848.jpg)  no-repeat fixed center;
         background-size: cover;

    }
`

const SPLASH = styled.section`
animation: ${animateSplash} ease-in-out;
animation-duration: 20s;
overflow: hidden;
width: 100vw;
height: 100vh;
background: no-repeat center center;
background-size: cover;
animation-fill-mode: forwards;
padding: 0;
margin: 0;
`

const OVERLAY = styled.section`
position: absolute;
height: 100%;
background: black;
width: 100%;
opacity: .85;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
top: 0;
bottom: 0;
`
 
const SPLASHSCREEN: React.FC<SPLASHSCREENProps> = () => {

 const [switchScreen, setSwitchScreen] = useState<string>('')

    const history = useHistory()

    useEffect(() => {
            setTimeout(() => {
                    setSwitchScreen("/gallery")
            }, 20000);
    },[])

    useEffect(() => {
        if(switchScreen === "/gallery") {
            history.push(switchScreen)
        }
    },[switchScreen])


    return (
        <>

    <SPLASH>

        <OVERLAY className="">
            <img src="https://www.planeteria.com/wp-content/uploads/2021/01/Group-239.svg" className="h-40 w-40" />
            
        </OVERLAY>




        
    </SPLASH>

        </>
      );
}
 
export default SPLASHSCREEN;