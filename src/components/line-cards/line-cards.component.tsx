import { ILineCard } from "../../types/cv";
import "./line-cards.styles.css";

export const LineCardLeftComponent: React.FC<ILineCard> = ({
  year1,
  year2,
  number,
  heading,
  skill,
  text,
}) => {
  return (
    <div className="line-card-items__left">
      <div className="line-card-items__left__round">
        <div className="line-card-items__left__round-year">
          <h1>
            <span>
              {year1}
              <br />-<br />
              {year2}
            </span>
          </h1>
        </div>
      </div>
      <div className="line-card-items__left__box">
        <div className="line-card-items__left__box-tag">
          <div className="line-card-items__left__box-tag__box">
            <div className="line-card-items__left__box-tag__left-title">
              <h1>{number}</h1>
            </div>
            <div className="line-card-items__left__box-tag__right-title">
              <h1>{heading}</h1>
            </div>
          </div>
        </div>
        <h3 className="line-card-items__left__box-info">{skill}</h3>
        <p className="line-card-items__left__box-para">{text}</p>
      </div>
    </div>
  );
};

export const LineCardRightComponent: React.FC<ILineCard> = ({
  year1,
  year2,
  number,
  heading,
  skill,
  text,
}) => {
  return (
    <div className="line-card-items__right">
      <div className="line-card-items__right__box">
        <div className="line-card-items__right__box-inner">
          <div className="line-card-items__right__box-tag">
            <div className="line-card-items__right__box-tag__box">
              <div className="line-card-items__right__box-tag__right-title">
                <h1>{heading}</h1>
              </div>
              <div className="line-card-items__right__box-tag__left-title">
                <h1>{number}</h1>
              </div>
            </div>
          </div>
          <h3 className="line-card-items__right__box-info">{skill}</h3>
          <p className="line-card-items__right__box-para">{text}</p>
        </div>
      </div>
      <div className="line-card-items__right__round">
        <div className="line-card-items__right__round-year">
          <h1>
            <span>
              {year1}
              <br />-<br />
              {year2}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
