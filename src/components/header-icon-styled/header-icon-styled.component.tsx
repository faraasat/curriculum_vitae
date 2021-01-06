import { IHeaderIconStyles } from "../../types/cv";
import HeaderIconComponent from "../header-icon/header-icon.component";
import "./header-icon-styled.styles.css";

const HeaderIconStyledComponent: React.FC<IHeaderIconStyles> = ({
  href,
  Icon,
  color,
  text,
}) => {
  return (
    <div className="cv-header__about-icon__icon">
      <div className="cv-header__about-icon__position">
        <a href={href} className="cv-header__about-icon__styling">
          <HeaderIconComponent
            className="cv-header__about-icon__styling-hover-visible"
            component={Icon}
            color={color}
          />
          <HeaderIconComponent
            className="cv-header__about-icon__styling-hover-hidden"
            component={Icon}
            color={color}
          />
        </a>
        <p
          style={{ color: color }}
          className="cv-header__about-icon__styling-hover-hidden__text"
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default HeaderIconStyledComponent;
