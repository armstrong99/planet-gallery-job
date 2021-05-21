import '../styles/Home.module.scss'

export interface ProjectsProps {
    
}
 
const Projects: React.FC<ProjectsProps> = () => {
    return ( 
        <>

      <article id='projectSection' className={`mt-12 'projectContainer'`}>

           <section className="relative">

            <h2  className="text-xl md:text-4xl md:mt-20 font-bold text-center py-6 md:height-auto">Case Study of some previous <br /> projects</h2>

            <img src="/curlarrow.png" className="absolute md:hidden top-2/4 left-2/4 opacity-4"  alt="case study of some projects " />
            <img src="/curlDeskArrow.png" className="absolute top-2/4 left-2/4 opacity-4"  alt="case study of some projects" />

            </section>

            <section className="flex flex-col flex-wrap md:flex-row w-full justify-around items-around height-auto">
         <section className="mt-6 md:my-12">
        <img alt={"kobo project"} src={"/kopo.png"} className={ `rounded-none mx-auto my-0 h-80 mt-6 'projectsImg' `} />
        </section>

        <section className="mt-6 md:my-12">
        <img alt={"kobo project"} src={"/kopo.png"} className={ `rounded-none mx-auto my-0 h-80 mt-6 'projectsImg' `} />
        </section>

        <section className="mt-6 md:my-12">
        <img alt={"kobo project"} src={"/kopo.png"} className={ `rounded-none mx-auto my-0 h-80 mt-6 'projectsImg' `} />
        </section>
         
        <section className="mt-6 md:my-12">
        <img alt={"kobo project"} src={"/kopo.png"} className={ `rounded-none mx-auto my-0 h-80 mt-6 'projectsImg' `} />
        </section>
         
        <section className="mt-6 md:my-12">
        <img alt={"kobo project"} src={"/kopo.png"} className={ `rounded-none mx-auto my-0 h-80 mt-6 'projectsImg' `} />
        </section>
         
            </section>


        </article>

        </>
     );
}
 
export default Projects;