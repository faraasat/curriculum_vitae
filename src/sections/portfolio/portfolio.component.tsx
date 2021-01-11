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
      <div className="portfolio-skills-background">
        <div className="portfolio-skills-alignment">
          <div className="portfolio-skills-container">
            <div>
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__html"
                icon={faHtml5}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__css"
                icon={faCss3Alt}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__sass"
                icon={faSass}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__bootstrap"
                icon={faBootstrap}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__js"
                icon={faJs}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__react"
                icon={faReact}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__node"
                icon={faNode}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__docker"
                icon={faDocker}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__git"
                icon={faGitAlt}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__java"
                icon={faJava}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__python"
                icon={faPython}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__rust"
                icon={faRust}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
