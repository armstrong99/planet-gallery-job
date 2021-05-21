import {TeamTypes} from '../@types/team'
import Team from '../components/team'
import '../styles/Team.module.scss' 
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
 
    return (
        <>
        <section className="md:h-auto">
             <h2 className={`text-xl md:text-4xl font-bold text-center mt-12 h2`}>Meet Our Team</h2>
                 <section className="flex flex-col md:w-4/5 md:m-auto flex-wrap md:flex-row w-full justify-around items-around md:h-auto">
                    {  
                    Teams.map((team, i) => <Team  {...team} key={i} index={i} />  )
                    } 
                </section>
        </section>
         </> 
        )

}

 
export default TeamContainer;