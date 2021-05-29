import css from "../styles/Home.module.scss";
import curlArrow from "../assets/images/curlarrow.png";
import curlDeskArrow from "../assets/images/curlDeskArrow.png";
import kopo from "../assets/images/kopo.png";
import { useContext, useEffect, useRef } from "react";
import Context from "../store";

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
        <section className="relative">
          <h2 className="text-xl md:text-4xl md:mt-20 font-bold text-center py-6 md:height-auto">
            Case Study of some previous <br /> projects
          </h2>

          <img
            src={curlArrow}
            className="absolute md:hidden top-2/4 left-2/4 opacity-4"
            alt="case study of some projects "
          />
          <img
            src={curlDeskArrow}
            className="absolute hidden md:inline-block top-2/4 left-2/4 opacity-4"
            alt="case study of some projects"
          />
        </section>

        <section className="flex flex-col md:mt-20 flex-wrap md:flex-row w-3/4 mx-auto justify-around items-around">
          <img
            alt={"kobo project"}
            src={kopo}
            className={`rounded-none mx-auto mt-8 md:mt-3 my-3 h-80 ${css.projectsImg}`}
          />

          <img
            alt={"kobo project"}
            src={kopo}
            className={`rounded-none mx-auto my-3 h-80 ${css.projectsImg} `}
          />

          <img
            alt={"kobo project"}
            src={kopo}
            className={`rounded-none mx-auto my-3 h-80 ${css.projectsImg} `}
          />

          <img
            alt={"kobo project"}
            src={kopo}
            className={`rounded-none mx-auto my-3 h-80 ${css.projectsImg} `}
          />
        </section>
      </article>
    </>
  );
};

export default Projects;
