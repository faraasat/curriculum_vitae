import { shallow } from "enzyme";
import PortfolioComponent from "./portfolio.component";

describe("Header Section Shallow Render", () => {
  const shallowRender = shallow(<PortfolioComponent />);
  it("should have more than 1 div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
