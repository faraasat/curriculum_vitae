import { shallow } from "enzyme";
import AboutSection from "./about.component";

describe("About Section Shallow Render", () => {
  const shallowRender = shallow(<AboutSection />);
  it("should find more than 1 div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
