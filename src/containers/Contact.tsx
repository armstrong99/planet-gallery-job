import Contact from "../components/contact";
import { ContactTypes } from "../@types/contact";
  
export interface ContactContainerProps {
    
}
 
const ContactContainer: React.FC<ContactContainerProps> = () => {
    const contactDetails: ContactTypes[] = [
        {
            icon: "ei_location.svg",
            content: "Last Floor Don Hiro Filling \n Station, Opposite GTBank, \n Sani Abacha Expressway, \n Yenagoa, Bayelsa State \n Nigeria.",
         },
        {
            icon: "phone.svg",
            phone: ['+234(0)806 123 4567',  '+234(0)806 123 4567'],
         },
        {
            icon: "email.svg",
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