import { shallow } from "enzyme";
import CircularProgressComponent from "./circular-progress.component";

describe("Circular Progress Component Shallow Render", () => {
  // const mockParams = {
  //   onClick: jest.fn(),
  //   children: <span />,
  // };

  const shallowRender = shallow(<CircularProgressComponent />);
  it("should find className cv-custom-button-component", () => {
    expect(shallowRender.find(".cv-custom-button-component").length).toBe(1);
  });
});
