import css from "../styles/Home.module.scss";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Context from "../store";
export interface MainBodyProps {
  title: string;
  imgAlt: string;
  content: string;
  imgUrl: string;
  index: number;
}

const animStyle = keyframes`
from {
    opacity: 0;
    transform: translateY(1.5rem);
}
to {
    opacity: 1;
    transform: translateY(0rem);
    visibility: visible;
}
`;
export interface IWrapper {
  animate?: boolean;
}
const CONTAINER = styled.article<IWrapper>`
  animation: ${(props) => (props.animate ? animStyle : "")} ease-in 2s;
  animation-fill-mode: forwards;
  transition: 3s ease-in all;
`;

const MainBody: React.FC<MainBodyProps> = ({
  title,
  imgAlt,
  content,
  imgUrl,
  index,
}) => {
  const [wrapperAnimate, setWrapperAnimate] = useState<boolean>(false);
  const [containerAnimate, setContainerAnimate] = useState<number[]>([]);
  const { scrollWindowPosition } = useContext(Context).state;

  useEffect(() => {
    console.log(scrollWindowPosition!);
    if (scrollWindowPosition! > 80 && scrollWindowPosition! < 520) {
      setWrapperAnimate(true);
       setContainerAnimate([1]);
    } else if (scrollWindowPosition! > 785 && scrollWindowPosition! < 1150) {
      setContainerAnimate([2]);
      setWrapperAnimate(true);
    } else setWrapperAnimate(false);
  }, [scrollWindowPosition]);

  return (
    <>
      <h2 className="text-xl font-bold text-center pt-16 md:height-auto md:hidden">
        {title}
      </h2>
      <article
        className={`${css.mainBody} ${
          index % 2 === 0
            ? "md:flex-row-reverse mt-32 items-center"
            : "md:flex-row mt-32 items-center"
        }`}
        style={index % 2 === 0 ? { background: "#FCFCFC" } : {}}
      >
        <CONTAINER
          animate={
            wrapperAnimate && containerAnimate.includes(index + 1)
              ? wrapperAnimate
              : false
          }
          className="w-1/2"
        >
          <h2>{title}</h2>
          <p className="text-center p-4 font-normal">{content}</p>
        </CONTAINER>
        <img alt={imgAlt} src={imgUrl} className={css.maiBodyImg} />
      </article>
    </>
  );
};

export default MainBody;
