import { Icon } from "@material-ui/core";
import { IHeaderIcon } from "../../types/cv";

const HeaderIconComponent: React.FC<IHeaderIcon> = ({
  component,
  color,
  className,
}) => {
  return (
    <div className={`cv-header__about-icon ${className}`}>
      <Icon component={component} style={{ color: color }} />
    </div>
  );
};

export default HeaderIconComponent;
