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
import {
  PortfolioSkillIconBootstrapStyles,
  PortfolioSkillIconCssStyles,
  PortfolioSkillIconDockerStyles,
  PortfolioSkillIconGitStyles,
  PortfolioSkillIconHtmlStyles,
  PortfolioSkillIconJavaStyles,
  PortfolioSkillIconJsStyles,
  PortfolioSkillIconNodeStyles,
  PortfolioSkillIconPythonStyles,
  PortfolioSkillIconReactStyles,
  PortfolioSkillIconReduxStyles,
  PortfolioSkillIconRustStyles,
  PortfolioSkillIconSassStyles,
  PortfolioSkillsAlignmentStyles,
  PortfolioSkillsBackgroundStyles,
  PortfolioSkillsContainerAlignmentStyles,
  PortfolioSkillsContainerStyles,
  PortfolioSkillIconTsStyles,
  PortfolioSkillIconGatsbyStyles,
  PortfolioSkillIconGraphqlStyles,
  PortfolioSkillIconKubeStyles,
  PortfolioSkillIconAspStyles,
  PortfolioSkillIconCppStyles,
  PortfolioSkillIconCLangStyles,
  PortfolioSkillIconCsStyles,
  PortfolioSkillIconLinuxStyles,
  PortfolioSkillIconPostgreStyles,
  PortfolioSkillIconMsSqlStyles,
} from "./portfolio.styles";
import Bounce from "react-reveal/Bounce";

const PortfolioComponent = () => {
  return (
    <PortfolioSkillsBackgroundStyles>
      <PortfolioSkillsAlignmentStyles>
        <PortfolioSkillsContainerStyles>
          <PortfolioSkillsContainerAlignmentStyles>
            <Bounce right>
              <PortfolioSkillIconHtmlStyles icon={faHtml5} />
              <PortfolioSkillIconCssStyles icon={faCss3Alt} />
              <PortfolioSkillIconSassStyles icon={faSass} />
              <PortfolioSkillIconBootstrapStyles icon={faBootstrap} />
              <PortfolioSkillIconJsStyles icon={faJs} />
              <PortfolioSkillIconTsStyles component={TypeScript} />
              <PortfolioSkillIconReactStyles icon={faReact} />
              <PortfolioSkillIconReduxStyles component={Redux} />
              <PortfolioSkillIconGatsbyStyles component={Gatsby} />
              <PortfolioSkillIconGraphqlStyles component={Graphql} />
              <PortfolioSkillIconNodeStyles icon={faNode} />
              <PortfolioSkillIconDockerStyles icon={faDocker} />
              <PortfolioSkillIconKubeStyles component={Kube} />
              <PortfolioSkillIconGitStyles icon={faGitAlt} />
              <PortfolioSkillIconAspStyles component={Asp} />
              <PortfolioSkillIconCLangStyles component={CLang} />
              <PortfolioSkillIconCppStyles component={CPP} />
              <PortfolioSkillIconCsStyles component={CS} />
              <PortfolioSkillIconLinuxStyles component={Linux} />
              <PortfolioSkillIconPostgreStyles component={Postgre} />
              <PortfolioSkillIconMsSqlStyles component={MsSql} />
              <PortfolioSkillIconJavaStyles icon={faJava} />
              <PortfolioSkillIconPythonStyles icon={faPython} />
              <PortfolioSkillIconRustStyles icon={faRust} />
            </Bounce>
          </PortfolioSkillsContainerAlignmentStyles>
        </PortfolioSkillsContainerStyles>
      </PortfolioSkillsAlignmentStyles>
    </PortfolioSkillsBackgroundStyles>
  );
};

export default PortfolioComponent;
