import  {
    faTwitter, 
    faFacebook, 
    faLinkedin, 
    faInstagram,
    }  from '@fortawesome/free-brands-svg-icons'

import React from 'react'

const socialMediaIcons = (): {[name:string]: any} => {
   return {
       "twitter": faTwitter,
       "facebook": faFacebook,
       "linkedin": faLinkedin,
       "instagram": faInstagram
   } 
}
export default socialMediaIcons