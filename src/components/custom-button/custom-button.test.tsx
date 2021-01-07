import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";

describe("HeaderIcon Component Shallow Render", () => {
  const mockParams = {
    onClick: jest.fn(),
    children: <span />,
  };

  const shallowRender = shallow(<CustomButton {...mockParams} />);
  it("should find className cv-custom-button-component", () => {
    expect(shallowRender.find(".cv-custom-button-component").length).toBe(1);
  });
});
