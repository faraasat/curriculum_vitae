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
  className: string;
}

export interface IHeaderIconStyles {
  href: string;
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
