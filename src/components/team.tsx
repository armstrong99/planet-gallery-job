// import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import { TeamProps } from '../@types/team';
import css from '../styles/Team.module.scss'
import socialMediaIcons from '../helpers/socialmediaicons';

const Team: React.FC<TeamProps> = ({title, name, imgUrl, socialMedia, index}) => {
     return (  
         <>
         <section className={`flex flex-col items-center md:w-1/3 md:h-auto ${index! > 0 ? 'my-10' : 'my-10'}`}>
 
             
         <figure>
              
                 <img alt={name} src={imgUrl} className='rounded-full w-48 h-48 m-auto shadow-xl' />
              
             <figcaption className={`${css.teamName} my-3`}>{name}</figcaption>
         </figure>

         <p className={css.teamPosition}>{title}</p>

            <section className="w-40 flex h-auto p-1 m-0 justify-around items-center text-l mt-3">
            {
                socialMedia.map((social, i) => <Link to={social.url} key={i}>
                    <FontAwesomeIcon icon={socialMediaIcons()[social.name]} /> 
                </Link>)

            }
            </section>
         </section>
 
         </>
     );
 }
  
 export default Team;