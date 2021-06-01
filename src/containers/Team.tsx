import {TeamTypes} from '../@types/team'
import Team from '../components/team'
import '../styles/Team.module.scss' 
import {useContext, useEffect, useRef} from 'react'
import Context from '../store'
import Fade from 'react-reveal/Fade'
export interface TeamContainerProps {
    
}
 
const TeamContainer: React.FC<TeamContainerProps> = () => {
        const Teams: TeamTypes[] = [
          
            {
                title: "Engineering Lead(Front-end)",
                name: "Ndukwe Armstrong",
                imgUrl: "https://thumbs.dreamstime.com/b/outdoor-imaget-smiling-female-entrepreneur-blue-suit-looking-to-camera-resting-park-work-happy-young-woman-196217610.jpg",
                socialMedia: [
                    {
                    name: "twitter",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "facebook",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "linkedin",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "instagram",
                    url: "twitter.com/AI_Lift"
                },
            ]
            },
            {
                title: "Engineering Lead(Front-end)",
                name: "Ndukwe Armstrong",
                imgUrl: "https://thumbs.dreamstime.com/b/outdoor-imaget-smiling-female-entrepreneur-blue-suit-looking-to-camera-resting-park-work-happy-young-woman-196217610.jpg",
                socialMedia: [
                    {
                    name: "twitter",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "facebook",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "linkedin",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "instagram",
                    url: "twitter.com/AI_Lift"
                },
            ]
            },
            {
                title: "Engineering Lead(Front-end)",
                name: "Ndukwe Armstrong",
                imgUrl: "https://thumbs.dreamstime.com/b/outdoor-imaget-smiling-female-entrepreneur-blue-suit-looking-to-camera-resting-park-work-happy-young-woman-196217610.jpg",
                socialMedia: [
                    {
                    name: "twitter",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "facebook",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "linkedin",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "instagram",
                    url: "twitter.com/AI_Lift"
                },
            ]
            },
            {
                title: "Engineering Lead(Front-end)",
                name: "Ndukwe Armstrong",
                imgUrl: "https://thumbs.dreamstime.com/b/outdoor-imaget-smiling-female-entrepreneur-blue-suit-looking-to-camera-resting-park-work-happy-young-woman-196217610.jpg",
                socialMedia: [
                    {
                    name: "twitter",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "facebook",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "linkedin",
                    url: "twitter.com/AI_Lift"
                },
                    {
                    name: "instagram",
                    url: "twitter.com/AI_Lift"
                },
            ]
            },
            
        ]
        const divRef = useRef<HTMLDivElement>(null);

        const {htmlRef} = useContext(Context).state
        const {dispatch} = useContext(Context)

        useEffect(() => {

            if (htmlRef === "team") {
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
        <section className="md:h-auto mt-24">
             <h2 className={`text-xl md:text-4xl font-bold text-center mt-12 h2`}>Meet Our Team</h2>
                     <Fade duration={1500}>
                 <section className="flex flex-col md:w-4/5 md:m-auto flex-wrap md:flex-row w-full justify-around items-around md:h-auto">
                    {  
                    Teams.map((team, i) => <Team  {...team} key={i} index={i} />  )
                    } 
                </section>
                    </Fade>
        </section>
         </> 
        )

}

 
export default TeamContainer;