import css from "../styles/Home.module.scss";
import  Zoom  from "react-reveal/Zoom";

export interface DescriptionProps {}

const Description:React.FC<DescriptionProps> = () => {

  return (
    <>
      <section className={css.describtion}>
        <Zoom duration={1500}>
          <h3 className="text-white text-3xl md:text-5xl font-black md:h-auto">
            We Are a <br /> Solution <br />
            Expert Team
          </h3>
          <p className="font-thin text-white mt-10 md:mt-20 md:text-xl md:h-auto">
            First premium technological solution center <br />
            for effective business growth. We brand, <br /> create softwares{" "}
            {"&"} impact modern tech <br />
            industry required skills.
          </p>
        </Zoom>
      </section>
    </>
  );
};

export default Description;
