import { Icon } from "@material-ui/core";
import { ICustomButton } from "../../types/cv";
import "./custom-button.styles.css";

const CustomButton: React.FC<ICustomButton> = ({
  txt1,
  txt2,
  onClick,
  className,
  Ico,
}) => {
  return (
    <button
      className={`cv-custom-button-component ${className}`}
      onClick={onClick}
    >
      <span className="cv-custom-button-component__txt1">
        {txt1}&nbsp;
        <Icon className="cv-custom-button-component__ico" component={Ico} />
      </span>
      <span className="cv-custom-button-component__txt2">{txt2}</span>
    </button>
  );
};

export default CustomButton;
