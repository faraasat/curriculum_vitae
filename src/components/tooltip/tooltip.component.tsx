import React from "react";
import { makeStyles, Tooltip } from "@material-ui/core";
import { ITooltipComponent } from "../../types/cv";

const useStyles = makeStyles((theme) => ({
  customWidth: {
    maxWidth: 150,
  },
}));

const ToolTipComponent: React.FC<ITooltipComponent> = ({
  children,
  text,
  placement,
  TransitionComponent,
  color,
}) => {
  const classes = useStyles();

  return (
    <Tooltip
      classes={{ tooltip: classes.customWidth }}
      title={text}
      arrow
      interactive
      TransitionComponent={TransitionComponent}
      placement={placement}
      color={color}
    >
      {children}
    </Tooltip>
  );
};

export default ToolTipComponent;
