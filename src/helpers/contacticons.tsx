import {
  faPhone,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const contactIcons = (): { [name: string]: any } => {
  return {
    phone: faPhone,
    email: faEnvelope,
    location: faMapMarker,
  };
};

export default contactIcons;
