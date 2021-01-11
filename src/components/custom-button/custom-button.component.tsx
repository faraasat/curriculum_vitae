import { Icon } from "@material-ui/core";
import { ICustomButton } from "../../types/cv";
import {
  CvCustomButtonComponentStyles,
  CvCustomButtonIconComponentStyles,
  CvCustomButtonTxt1ComponentStyles,
  CvCustomButtonTxt2ComponentStyles,
} from "./custom-button.styles";

const CustomButton: React.FC<ICustomButton> = ({
  txt1,
  txt2,
  onClick,
  className,
  Ico,
}) => {
  return (
    <CvCustomButtonComponentStyles className={className} onClick={onClick}>
      <CvCustomButtonTxt1ComponentStyles>
        {txt1}&nbsp;
        <CvCustomButtonIconComponentStyles>
          <Icon component={Ico} />
        </CvCustomButtonIconComponentStyles>
      </CvCustomButtonTxt1ComponentStyles>
      <CvCustomButtonTxt2ComponentStyles>
        {txt2}
      </CvCustomButtonTxt2ComponentStyles>
    </CvCustomButtonComponentStyles>
  );
};

export default CustomButton;
