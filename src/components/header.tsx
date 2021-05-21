import {Link} from 'react-router-dom'
import { useState } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

export interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
 

    return ( 
        <>
    <header className="flex items-center bg-white h-20">
    <Link to={'/'}>  
    <img
        src="https://www.pngitem.com/pimgs/m/8-81341_design-music-logo-hd-png-download.png"
        alt="Qoretek company"
         className="w-32 h-24 mr-auto"
      /> 
    </Link> 

        
       <MenuRoundedIcon /> 
    </header>
        </>
     );
}
 
export default Header;