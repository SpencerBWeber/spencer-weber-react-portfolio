import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faEraser,
  faSpinner,
  faPlusCircle,
  faPhone,
  faEnvelope,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faEraser,
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt
  );
};

export default Icons;
