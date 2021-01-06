import { shallow } from "enzyme";
import HeaderSection from "./header.component";

describe("Header Section Shallow Render", () => {
  const shallowRender = shallow(<HeaderSection />);
  it("should find className cv-header", () => {
    expect(shallowRender.find(".cv-header").length).toEqual(1);
  });

  it("should have more than 1 div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should have more than 1 br", () => {
    expect(shallowRender.find("br").length).toBeGreaterThanOrEqual(1);
  });

  it("should have more than 1 hr", () => {
    expect(shallowRender.find("hr").length).toBeGreaterThanOrEqual(1);
  });
});
