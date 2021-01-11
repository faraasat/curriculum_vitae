import { Icon } from "@material-ui/core";
import { IHeaderIcon } from "../../types/cv";
import { CvHeaderIconComponentStyles } from "./header-icon.styles";

const HeaderIconComponent: React.FC<IHeaderIcon> = ({
  component,
  color,
  className,
}) => {
  return (
    <CvHeaderIconComponentStyles className={className}>
      <Icon component={component} style={{ color: color }} />
    </CvHeaderIconComponentStyles>
  );
};

export default HeaderIconComponent;
