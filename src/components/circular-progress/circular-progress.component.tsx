import { ICircularProgress } from "../../types/cv";
import {
  CircularProgressComponentContainerStyles,
  CircularProgressComponentNumberStyles,
  CircularProgressComponentPercentStyles,
} from "./circular-progress.styles";

const CircularProgressComponent: React.FC<ICircularProgress> = ({
  text,
  percent,
  color,
}) => {
  return (
    <CircularProgressComponentContainerStyles>
      <CircularProgressComponentPercentStyles percent={percent} color={color}>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
        <CircularProgressComponentNumberStyles color={color} className='circular-progress-access-class'>
          <h2>{percent}%</h2>
          <p>{text}</p>
        </CircularProgressComponentNumberStyles>
      </CircularProgressComponentPercentStyles>
    </CircularProgressComponentContainerStyles>
  );
};

export default CircularProgressComponent;
