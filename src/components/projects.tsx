import css from "../styles/Home.module.scss";
import { useContext, useEffect, useRef } from "react";
import Context from "../store";
import proOne from '../assets/images/mockupOne.png'
import proTwo from '../assets/images/mockTwo.png'
import Slide from 'react-reveal/Pulse';
import Jump from 'react-reveal/Zoom';


export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { htmlRef } = useContext(Context).state;
  const { dispatch } = useContext(Context);

  useEffect(() => {

   if (htmlRef === "projects") {
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

      <article
        id={css.projectSection}
        className={`mt-20 ${css.projectContainer}`}
      >
        <section>
          <h2 className="text-xl md:text-4xl md:mt-20 font-bold text-center py-6 md:height-auto">
            Case Study of some previous <br /> projects
          </h2>
 
        </section>

        <section className="flex flex-col md:mt-10 flex-wrap md:flex-row w-full mx-auto justify-center items-center">
          <p className="w-3/12" style={{color:'#424242c7'}}>
          First premium technological solution center <br />
            for effective business growth. We brandcreate softwares{" "}
            {"&"} impact modern tech  
            industry required skills {"&"} impact modern tech  
            industry required skills
          </p>
          <Slide duration={2000} forever={true}>

          <img src={proOne} style={{height:'35rem', width: '50%'}} alt="samsung ui product" />
            </Slide>
          
          </section>
     
        <section className="flex flex-col md:mt-5 flex-wrap md:flex-row-reverse w-full mx-auto justify-center items-center">
          <p className="w-3/12" style={{color:'#424242c7'}}>
          First premium technological solution center <br />
            for effective business growth. We brandcreate softwares{" "}
            {"&"} impact modern tech  
            industry required skills {"&"} impact modern tech  
            industry required skills
          </p>
          <Jump duration={5000} forever={true}>

          <img src={proTwo} style={{height:'35rem', width: '50%'}} alt="samsung ui product" />
            </Jump>
          
          </section>
     
      </article>
    </>
  );
};

export default Projects;
