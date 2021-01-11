import { shallow } from "enzyme";
import HeaderIconComponent from "./header-icon.component";

describe("HeaderIcon Component Shallow Render", () => {
  const mockParams = {
    component: jest.fn(),
    color: "red",
    className: "abc",
  };

  const shallowRender = shallow(<HeaderIconComponent {...mockParams} />);
  it("should find div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
