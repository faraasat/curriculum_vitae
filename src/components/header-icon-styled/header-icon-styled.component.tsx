import { IHeaderIconStyles } from "../../types/cv";
import {
  CvHeaderAboutIconIconStyles,
  CvHeaderAboutIconPositionStyles,
  CvHeaderAboutIconStylingHoverHiddenStyles,
  CvHeaderAboutIconStylingHoverHiddenTextStyles,
  CvHeaderAboutIconStylingHoverVisibleStyles,
  CvHeaderAboutIconStylingStyles,
} from "./header-icon.styles";

const HeaderIconStyledComponent: React.FC<IHeaderIconStyles> = ({
  Icon,
  color,
  text,
  onClick,
}) => {
  return (
    <CvHeaderAboutIconIconStyles onClick={onClick}>
      <CvHeaderAboutIconPositionStyles>
        <CvHeaderAboutIconStylingStyles>
          <CvHeaderAboutIconStylingHoverVisibleStyles
            component={Icon}
            color={color}
          />
          <CvHeaderAboutIconStylingHoverHiddenStyles
            component={Icon}
            color={color}
          />
        </CvHeaderAboutIconStylingStyles>
        <CvHeaderAboutIconStylingHoverHiddenTextStyles style={{ color: color }}>
          {text}
        </CvHeaderAboutIconStylingHoverHiddenTextStyles>
      </CvHeaderAboutIconPositionStyles>
    </CvHeaderAboutIconIconStyles>
  );
};

export default HeaderIconStyledComponent;
