import { Zoom } from "@material-ui/core";
import { shallow } from "enzyme";
import ToolTipComponent from "./tooltip.component";

describe("About Section Shallow Render", () => {
  const mockParams = {
    children: <span></span>,
    text: "hello world",
    TransitionComponent: Zoom,
    placement: "bottom",
  };
  const shallowRender = shallow(<ToolTipComponent {...mockParams} />);
  it("should find Tooltip Component", () => {
    expect(shallowRender.find(".tooltip-interactive-arrow").length).toBe(1);
  });
});
