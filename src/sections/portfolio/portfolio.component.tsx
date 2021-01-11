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
import { ReactComponent as TypeScript } from "../../assets/ts.svg";
import { ReactComponent as Redux } from "../../assets/redux.svg";
import { ReactComponent as Kube } from "../../assets/kube.svg";
import { ReactComponent as Asp } from "../../assets/asp.svg";
import { ReactComponent as CLang } from "../../assets/c.svg";
import { ReactComponent as CPP } from "../../assets/cpp.svg";
import { ReactComponent as CS } from "../../assets/cs.svg";
import { ReactComponent as Gatsby } from "../../assets/gatsby.svg";
import { ReactComponent as Linux } from "../../assets/linux.svg";
import { ReactComponent as Postgre } from "../../assets/postgre.svg";
import { ReactComponent as Graphql } from "../../assets/graphql.svg";
import { ReactComponent as MsSql } from "../../assets/mssql.svg";
import { Icon } from "@material-ui/core";

const PortfolioComponent = () => {
  return (
    <div>
      <div className="portfolio-skills-background">
        <div className="portfolio-skills-alignment">
          <div className="portfolio-skills-container">
            <div className="portfolio-skills-container__alignment">
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
              <Icon
                component={TypeScript}
                className="portfolio-skills-icon__ts"
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__react"
                icon={faReact}
              />
              <Icon
                component={Redux}
                className="portfolio-skills-icon__redux"
              />
              <Icon
                component={Gatsby}
                className="portfolio-skills-icon__gatsby"
              />
              <Icon
                component={Graphql}
                className="portfolio-skills-icon__graphql"
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__node"
                icon={faNode}
              />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__docker"
                icon={faDocker}
              />
              <Icon component={Kube} className="portfolio-skills-icon__kube" />
              <FontAwesomeIcon
                className="portfolio-skills-icons portfolio-skills-icon__git"
                icon={faGitAlt}
              />
              <Icon component={Asp} className="portfolio-skills-icon__asp" />
              <Icon component={CLang} className="portfolio-skills-icon__c" />
              <Icon component={CPP} className="portfolio-skills-icon__cpp" />
              <Icon component={CS} className="portfolio-skills-icon__cs" />
              <Icon
                component={Linux}
                className="portfolio-skills-icon__linux"
              />
              <Icon
                component={Postgre}
                className="portfolio-skills-icon__postgre"
              />
              <Icon
                component={MsSql}
                className="portfolio-skills-icon__mssql"
              />
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
