export interface IChildren {
  children: React.ReactElement<any, any>;
}

export interface IProfileImage {
  src: string;
  alt: string;
  draggable: boolean | "true" | "false" | undefined;
  color?: string;
}

export interface IHeaderIcon {
  component: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  color: string;
  className?: string;
}

export interface IHeaderIconStyles {
  onClick?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  color: string;
  text: string;
}

export interface ITooltipComponent extends IChildren {
  text: string;
  color?: string;
  placement: any;
  TransitionComponent:
    | JSX.Element
    | ComponentClass<
        TransitionProps & { children?: ReactElement<any, any> | undefined },
        any
      >
    | FunctionComponent<TransitionProps>
    | undefined;
}

export interface ICustomButton {
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  txt1: string;
  txt2: string;
  className?: string;
  Ico?: any;
}

export interface ITypographyStyleTextPattern {
  id?: string;
  text: {
    1: string;
    2: string;
    3: string;
    4: string;
  }[];
}

export interface ITypographyStyle {
  text: string;
}

export interface ILineCard {
  color: string;
  year1: string;
  year2: string;
  number: string;
  heading: string;
  skill: string;
  text: string;
}

export interface IPanel {
  panel: boolean;
}

export interface ICircularProgress {
  text: string;
  percent: number;
  color: string;
}

export interface ICircularProgressStyles {
  percent: number;
  color: string;
}

export interface ICircularTextStyles {
  color: string;
}

export interface IIconState {
  iconState: boolean;
}

export interface IHoverScrollImage {
  Img: any;
}

export interface IHoverScroll extends IHoverScrollImage {
  url: string;
  para: string;
  heading: string;
}
