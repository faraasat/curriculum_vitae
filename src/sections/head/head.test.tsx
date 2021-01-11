import { shallow } from "enzyme";
import HeadSection from "./head.component";

describe("Head Section Shallow Render", () => {
  const shallowRender = shallow(<HeadSection />);
  it("should find more than 1 div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
