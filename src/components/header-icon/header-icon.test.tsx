import { shallow } from "enzyme";
import HeaderIconComponent from "./header-icon.component";

describe("HeaderIcon Component Shallow Render", () => {
  const mockParams = {
    component: jest.fn(),
    color: "red",
    className: "abc",
  };

  const shallowRender = shallow(<HeaderIconComponent {...mockParams} />);
  it("should find className cv-header__about-icon", () => {
    expect(shallowRender.find(".cv-header__about-icon").length).toBe(1);
  });
});
