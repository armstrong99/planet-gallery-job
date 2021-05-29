import Contact from "../components/contact";
import { ContactTypes } from "../@types/contact";
import locationIcon from '../assets/images/ei_location.svg'
import emailIcon from '../assets/images/email.svg'
import phoneIcon from '../assets/images/phone.svg'
import {useContext, useEffect, useRef} from 'react'
import Context from '../store'
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
    const divRef = useRef<HTMLDivElement>(null);

    const {htmlRef} = useContext(Context).state
    const {dispatch} = useContext(Context)
    useEffect(() => {

        if (htmlRef === "contacts") {
           divRef.current?.scrollIntoView({
             behavior: "smooth",
             block: "start",
             inline: "nearest",
           });
         }
         dispatch({
           type: "SCROLL_INTO_VIEW",
           payload: {
             htmlRef: "elem",
           },
         });
       }, [htmlRef, dispatch]);

    return ( 
        <>
                <div ref={divRef}></div>

        <section className="md:h-auto flex flex-col md:flex-row md:justify-around md:items-center md:flex-wrap">
         {contactDetails.map((detail, i) => <Contact {...detail} key={i} index={i} /> )}
        </section>
        </>
     );
}
 
export default ContactContainer;