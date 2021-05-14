import bear from '../assets/images/bear.svg'
import styled, { keyframes } from 'styled-components'

const Pulse = keyframes`
0% {
   transform: scale(0.7);
   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
 }
 50% {
   transform: scale(1);
   box-shadow: 0 0 0 30 rgba(0, 0, 0, 0);
 }
 100% {
   transform: scale(0.7);
 }
`

const VERIFYAREA = styled.section`
   & img {
      animation: ${Pulse} 2s infinite;
   }
`
export interface BearPreloaderProps {
   message: string ,
   height?: string
}
 
const BearPreloader: React.FC<BearPreloaderProps> = ({message, height}) => {
    return ( 
        <>
             <VERIFYAREA className={`${height ? height : 'h-screen'} w-screen flex flex-col justify-center items-center`}>
                 <img src={bear} alt="waiting for verification" className="h-20 w-20" />
                     <br />
                 <h2 className="opacity-60 font-medium">{message}</h2>
              </VERIFYAREA>
        </>
     );
}

BearPreloader.defaultProps = {
   message: "Verifying, pls wait..."
}
 
export default BearPreloader;