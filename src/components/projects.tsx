import css from '../styles/Home.module.scss'
import curlArrow from '../assets/images/curlarrow.png'
import curlDeskArrow from '../assets/images/curlDeskArrow.png'
import kopo from '../assets/images/kopo.png'

export interface ProjectsProps {
    
}
 
const Projects: React.FC<ProjectsProps> = () => {
    return ( 
        <>

      <article id={css.projectSection} className={`mt-20 ${css.projectContainer}`}>

           <section className="relative">

            <h2  className="text-xl md:text-4xl md:mt-20 font-bold text-center py-6 md:height-auto">Case Study of some previous <br /> projects</h2>

            <img src={curlArrow} className="absolute md:hidden top-2/4 left-2/4 opacity-4"  alt="case study of some projects " />
            <img src={curlDeskArrow} className="absolute top-2/4 left-2/4 opacity-4"  alt="case study of some projects" />

            </section>

            <section className="flex flex-col flex-wrap md:flex-row w-3/4 mx-auto justify-around items-around">
         <section className="md:mb-12 md:mt-20" style={{width:'20rem'}}>
        <img alt={"kobo project"} src={kopo} className={ `rounded-none mx-auto my-0 h-80 ${css.projectsImg}`} />
        </section>

        <section className="md:mb-12 md:mt-20" style={{width:'20rem'}}>
        <img alt={"kobo project"} src={kopo} className={ `rounded-none mx-auto my-0 h-80 ${css.projectsImg} `} />
        </section>

        <section className="md:my-12" style={{width:'20rem'}}>
        <img alt={"kobo project"} src={kopo} className={ `rounded-none mx-auto my-0 h-80 ${css.projectsImg} `} />
        </section>
         
        <section className="md:my-12" style={{width:'20rem'}}>
        <img alt={"kobo project"} src={kopo} className={ `rounded-none mx-auto my-0 h-80 ${css.projectsImg} `} />
        </section>
         
        <section className="md:my-12" style={{width:'20rem'}}>
        <img alt={"kobo project"} src={kopo} className={ `rounded-none mx-auto my-0 h-80 ${css.projectsImg} `} />
        </section>
         
            </section>
         </article>

        </>
     );
}
 
export default Projects;