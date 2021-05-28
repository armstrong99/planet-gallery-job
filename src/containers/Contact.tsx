import Contact from "../components/contact";
import { ContactTypes } from "../@types/contact";
import locationIcon from '../assets/images/ei_location.svg'
import emailIcon from '../assets/images/email.svg'
import phoneIcon from '../assets/images/phone.svg'
export interface ContactContainerProps {
    
}
 
const ContactContainer: React.FC<ContactContainerProps> = () => {
    const contactDetails: ContactTypes[] = [
        {
            icon: locationIcon,
            content: "Last Floor Don Hiro Filling \n Station, Opposite GTBank, \n Sani Abacha Expressway, \n Yenagoa, Bayelsa State \n Nigeria.",
         },
        {
            icon: phoneIcon,
            phone: ['+234(0)806 123 4567',  '+234(0)806 123 4567'],
         },
        {
            icon: emailIcon,
            content: "info@qoretek.co",
         },
    ]
    return ( 
        <>
        <section className="md:h-auto flex md:flex-row md:justify-around md:items-center md:flex-wrap">
         {contactDetails.map((detail, i) => <Contact {...detail} key={i} index={i} /> )}
        </section>
        </>
     );
}
 
export default ContactContainer;