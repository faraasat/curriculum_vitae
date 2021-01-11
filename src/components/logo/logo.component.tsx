import { Zoom } from "@material-ui/core";
import { IProfileImage } from "../../types/cv";
import ToolTipComponent from "../tooltip/tooltip.component";
import { CvHeaderImageBackground } from "./logo.styles";

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
      <CvHeaderImageBackground src={src} alt={alt} draggable={draggable} />
    </ToolTipComponent>
  );
};

export default LogoComponent;
