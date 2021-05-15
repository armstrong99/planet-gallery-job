import bear from '../assets/images/bear.svg'
 import { VERIFYAREA } from './styledComponents/loader.style';

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