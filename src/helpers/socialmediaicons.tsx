import  {
    faTwitter, 
    faFacebook, 
    faLinkedin, 
    faInstagram,
    }  from '@fortawesome/free-brands-svg-icons'

const socialMediaIcons = (): {[name:string]: any} => {
   return {
       "twitter": faTwitter,
       "facebook": faFacebook,
       "linkedin": faLinkedin,
       "instagram": faInstagram
   } 
}
export default socialMediaIcons