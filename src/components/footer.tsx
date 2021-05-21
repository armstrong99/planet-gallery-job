import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import socialMediaIcons from '../helpers/socialmediaicons';
import { SocialMedia } from '../@types/team';
import '../styles/Footer.module.scss'
import { useEffect, useState } from 'react';
import Contact from '../containers/Contact';

export interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    const qoretekHandles: SocialMedia[] = [
        {
            name: "twitter",
            url: "twitter.com/Qoretek"
        },
        {
            name: "facebook",
            url: "twitter.com/Qoretek"
        },
        {
            name: "instagram",
            url: "twitter.com/Qoretek"
        },
        {
            name: "linkedin",
            url: "twitter.com/Qoretek"
        },
    ]

    interface FormData {
        name: string,
        email: string,
        phone: string,
        content: string
    }

    interface BtnState {
        disabled: boolean
    }

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        content: ''
    })

    const [btnState, setButtonState] = useState<BtnState>({disabled: true})

    useEffect(() => {
             let {name,
                email,
                phone,
                content,} = formData;

                if(name !== '' && email !== '' && phone !== '' && content !== '') {
                    setButtonState({disabled: false})
                }

                else {
                    setButtonState({disabled: true})
                }
    },[formData])

    return ( 
        <>

        <footer className={`footer pt-10 pb-4 md:h-auto md:mt-12`}>
              <Contact />
            <h3 className={`h3 text-2xl font-semibold`}>Want to work with us ?</h3>

            <p className={`p my-6`}> Complete this form and we will <br /> 
get back to you in 24 hours </p>

                <form className={`'form' md:w-7/12 md:m-auto md:p-4 flex flex-col justify-center items-around` } >
                        <input 
                        className={'input'} 
                        type="text" 
                        placeholder="NAME" 
                        name="name"  
                        required 
                        aria-required
                        onChange={({target}) => setFormData({...formData, name: target.value})} />

                        <input 
                        className={`input`} 
                        type="email" 
                        placeholder="EMAIL" 
                        name="email"  
                        required 
                        aria-required
                        onChange={({target}) => setFormData({...formData, email: target.value})}
                         />

                        <input 
                        className={`input`} 
                        type="phone" 
                        placeholder="PHONE NUMBER" 
                        name="phone" 
                        required 
                        aria-required
                        onChange={({target}) => setFormData({...formData, phone: target.value})} />

                        <textarea 
                        className={'textarea'} 
                        placeholder="Type a message"
                        onChange={({target}) => setFormData({...formData, content: target.value})}></textarea>

                        <button className={'button'} disabled ={btnState.disabled}>SEND MESSAGE</button>
                </form>
 
                <section className="w-100 md:w-1/2 md:mx-auto px-6 flex h-auto p-1 m-0 justify-around items-center text-l mt-24">
                {
                qoretekHandles.map((handle, i) => 
                    <a target="_blank" rel="noopener noreferrer" href={handle.url} key={i}>
                    <FontAwesomeIcon icon={socialMediaIcons()[handle.name]}  style={{color: "white", fontSize:"1.5rem"}} /> 
                </a>    
                )
                }
                </section>

              <p className={`copyright mt-6`}>Copyright <FontAwesomeIcon icon={faCopyright} style={{color: "white", fontSize:"1.1rem"}} /> 2021 Qoretek</p>  
        </footer>

        </>
     );
}
 
export default Footer;