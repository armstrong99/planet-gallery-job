import { ContactTypes } from "../@types/contact";
import css from "../styles/Contact.module.scss";
import styled from "styled-components";
import PlaceOutlinedIcon from "@material-ui/icons/PlaceOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import Zoom from "react-reveal/Zoom";

const ICONWRAPPER = styled.section`
  color: white;
  @media screen and (min-width: 48rem) {
    color: black;
  }
`;

const Contact: React.FC<ContactTypes> = ({ content, index }) => {
  return (
    <>
      <section
        className={`flex items-center md:justify-center md:h-auto justify-around flex-col ${
          index! > 0 ? "my-12" : ""
        } ${css.contactCard}`}
      >
        <Zoom duration={1500}>
          <ICONWRAPPER>
            {index === 0 ? (
              <PlaceOutlinedIcon />
            ) : index === 1 ? (
              <PhoneOutlinedIcon />
            ) : (
              <MailOutlinedIcon />
            )}
          </ICONWRAPPER>

          {index === 0 ? (
            <address className={`${css.content} font-normal mt-6`}>
              {" "}
              {content}{" "}
            </address>
          ) : index === 1 ? (
            <section className={`${css.content} font-normal mt-6`}>
              <p>
                <a href={`tel:${"+234 34494 8848"}`}> {"+234 34494 8848"} </a>
              </p>
              <p>
                <a href={`tel:${"+234 34494 8848"}`}> {"+234 34494 8848"} </a>
              </p>
            </section>
          ) : (
            <p className={`${css.content} font-normal mt-6`}>
              <a href={`mailto:${content}`}> {content} </a>
            </p>
          )}
        </Zoom>
      </section>
    </>
  );
};

export default Contact;
