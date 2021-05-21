import { ContactTypes } from "../@types/contact";
import  '../styles/Contact.module.scss'
 
const Contact: React.FC<ContactTypes> = ({icon, content, index, phone}) => {

    return ( 
        <>
<section className={`flex items-center md:justify-center md:h-auto justify-around flex-col ${index! > 0 ? 'my-12' : ''} contactCard`} >

<img src={icon} /> 

{
    index === 0 ? 
    <address className={`content font-normal mt-6`}> {content} </address> 
    : index === 1 ?  
            <section className={`content font-normal mt-6`}>
                <p> 
                <a href={`tel:${'+234 34494 8848'}`}> {'+234 34494 8848'} </a>
                </p>
                <p>
                <a href={`tel:${'+234 34494 8848'}`}> {'+234 34494 8848'} </a>
                </p>
            </section>
             
     :
            <p className={`content font-normal mt-6`}>
            <a href={`mailto:${content}`} > {content} </a>    
            </p>

}
 

</section>

        </>
     );
}
 
export default Contact;