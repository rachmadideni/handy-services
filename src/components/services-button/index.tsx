import { styled } from "styled-components";
import { motion } from "framer-motion";

type ServicesButtonProps = {
  text: string;
  startAdornment: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0.5,
    },
  },
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  gap: 0.4rem;
  border-radius: 0.4rem;
  border: solid 0.7px ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkTurquoise};
`;

const ButtonTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.circular};
  font-size: 13px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.ebonyClay};
`;

const ServicesButton = (props: ServicesButtonProps) => {
  const MotionWrapper = motion(Wrapper);
  return (
    <MotionWrapper variants={item} onClick={props.onClick}>
      {props.startAdornment}
      <ButtonTitle>{props.text}</ButtonTitle>
    </MotionWrapper>
  );
};

export default ServicesButton;
