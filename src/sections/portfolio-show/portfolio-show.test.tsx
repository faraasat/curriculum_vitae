import { shallow } from "enzyme";
import PortfolioShowComponent from "./portfolio-show.component";

describe("Header Show Section Shallow Render", () => {
  const shallowRender = shallow(<PortfolioShowComponent />);
  it("should have more than 1 div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
