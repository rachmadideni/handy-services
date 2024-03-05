import { StyledWrapper } from "./index.styled";

export type CircularIconProps = {
  icon: React.ReactNode;
  $hasShadow?: boolean;
  $bgColor?: string;
  width?: string;
  height?: string;
};

const CircularIcon = ({ ...props }: CircularIconProps) => {
  return <StyledWrapper {...props}>{props.icon}</StyledWrapper>;
};

export default CircularIcon;
