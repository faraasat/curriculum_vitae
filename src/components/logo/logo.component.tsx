import { Zoom } from "@material-ui/core";
import { IProfileImage } from "../../types/cv";
import ToolTipComponent from "../tooltip/tooltip.component";
import "./logo.styles.css";

const LogoComponent: React.FC<IProfileImage> = ({
  src,
  alt,
  draggable,
  color,
}) => {
  return (
    <ToolTipComponent
      color={color}
      TransitionComponent={Zoom}
      placement="right"
      text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Front-End Developer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Name: Farasat Ali &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Age: 18"
    >
      <img
        src={src}
        alt={alt}
        className="cv-header__image-background"
        draggable={draggable}
      />
    </ToolTipComponent>
  );
};

export default LogoComponent;
