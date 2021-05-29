// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import logo from "../assets/images/logo.png";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Context from "../store";

export interface HeaderProps {}

export interface IWrapper {
  animate: boolean;
  winPos?: number;
}

const WRAPPER = styled.header<IWrapper>`
  background: ${(props) => (props.animate ? "white" : "transparent")};
  transition: cubic-bezier(0.645, 0.045, 0.355, 2) all 0.5s;
  z-index: 4590;
  @media screen and (max-width: 48rem) {
  }
  section {
    width: 25rem;

    ul {
      display: flex;
      justify-content: space-around;
      color: ${(props) => (!props.animate ? "#ffffffab" : "#0a456a")};
      transition: cubic-bezier(0.645, 0.045, 0.355, 1) all 0.5s;
      font-size: small;
      font-weight: 600;
      li:nth-child(${(props) => props.winPos}) {
        border-bottom: ${(props) => (!props.animate ? "0px" : "3px ")} solid
          black;
        transition: cubic-bezier(0.645, 0.045, 0.355, 1) all 0.5s;
        border-bottom-radius: 1rem;
        padding-bottom: 0.3rem;
        width: 5rem;
        text-align: center;
      }
    }
  }
`;

const Header: React.FC<HeaderProps> = () => {
  const [wrapperAnimate, setWrapperAnimate] = useState<boolean>(false);
  const [winPos, setWinPos] = useState<number>(1);
  const { dispatch } = useContext(Context);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let winSPos = window.pageYOffset;
      console.log(winSPos);
      dispatch({
        type: "Scroll_Window_Position",
        payload: {
          scrollWindowPosition: winSPos,
        },
      });
      if (winSPos <= 60) {
        return setWrapperAnimate(false);
      } else if (winSPos > 60 && winSPos < 100) {
        setWinPos(1);
        return setWrapperAnimate(true);
      } else if (winSPos <= 1190) {
        setWrapperAnimate(true);
        return setWinPos(1);
      } else if (winSPos > 1190 && winSPos <= 2400) {
        setWrapperAnimate(true);
        return setWinPos(2);
      } else if (winSPos >= 2400 && winSPos < 3400) {
        setWrapperAnimate(true);
        return setWinPos(3);
      } else if (winSPos > 3400) {
        setWrapperAnimate(true);
        return setWinPos(4);
      } else {
        return setWrapperAnimate(true);
      }
    });
  }, [dispatch]);

  //scroll Into View
  const handleScrollIntoView = (elem: string) => {
    dispatch({
      type: "SCROLL_INTO_VIEW",
      payload: {
        htmlRef: elem,
      },
    });
  };

  return (
    <>
      <WRAPPER
        winPos={winPos}
        animate={wrapperAnimate}
        className="flex items-center h-16 fixed top-0 right-0 left-0"
      >
        <img src={logo} alt={"Qoretek company"} />

        <section className="ml-auto">
          <ul>
            <li>
              <a href="#about" onClick={() => handleScrollIntoView("about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handleScrollIntoView("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#team" onClick={() => handleScrollIntoView("team")}>
                Team
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                onClick={() => handleScrollIntoView("contacts")}
              >
                Contacts
              </a>
            </li>
          </ul>
        </section>
      </WRAPPER>
    </>
  );
};

export default Header;
