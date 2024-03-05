import { styled } from "styled-components";
import { type CircularIconProps } from ".";

export const StyledWrapper = styled.div<CircularIconProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$bgColor ? props.$bgColor : (props) => props.theme.colors.aqua};

  width: ${(props) => (props.width ? props.width : "20px")};
  height: ${(props) => (props.height ? props.height : "20px")};
  border-radius: 100%;
  box-shadow: ${(props) => (props.$hasShadow ? "1px 1px 14px #ddd" : "none")};

  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    width: ${(props) => (props.width ? props.width : "20px")};
    height: ${(props) => (props.height ? props.height : "20px")};
  }
`;
