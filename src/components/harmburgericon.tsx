import '../styles/Harmburgericon.module.css'
 

export interface HarmburgerIconProps {
  side: string  
}

 
const HarmburgerIcon: React.FC<HarmburgerIconProps> = ({side}) => {
 


    return ( 
        <>
         <div id="harmburgerIcon" > 
         <span className={side === "showMe" ? "spanFirst" :  "block"} ></span>
         <span className={side === "showMe" ? "spanSec" : "block"} ></span>
         <span className={side === "showMe" ? "spanThird" : "block"}></span>
         </div>  

        </>
     );
}

HarmburgerIcon.defaultProps ={
    side: 'dontShow'
}
 
export default HarmburgerIcon;