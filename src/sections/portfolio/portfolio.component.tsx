import "./portfolio.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faHtml5,
  faJava,
  faJs,
  faNode,
  faPython,
  faReact,
  faRust,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const PortfolioComponent = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faHtml5} />
      <FontAwesomeIcon icon={faCss3Alt} />
      <FontAwesomeIcon icon={faSass} />
      <FontAwesomeIcon icon={faBootstrap} />
      <FontAwesomeIcon icon={faJs} />
      <FontAwesomeIcon icon={faReact} />
      <FontAwesomeIcon icon={faNode} />
      <FontAwesomeIcon icon={faDocker} />
      <FontAwesomeIcon icon={faGitAlt} />
      <FontAwesomeIcon icon={faJava} />
      <FontAwesomeIcon icon={faPython} />
      <FontAwesomeIcon icon={faRust} />
    </div>
  );
};

export default PortfolioComponent;
