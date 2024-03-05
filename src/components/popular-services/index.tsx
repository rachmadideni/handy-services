import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ServicesButton from "../services-button";
import CircularIcon from "../circular-icon";
import { Wrapper, Title, ButtonsWrapper } from "./index.styled";
import { paths } from "@/router";

const variantContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.05,
      staggerDirection: 1,
      duration: 1.8,
    },
  },
};

const mainTitleVariant = {
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 10,
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 1,
    },
  },
};

type PopularTypes = {
  text: string;
  iconName: any;
};

type PopularServicesProps = {
  mainTitle: string;
  items: PopularTypes[];
};

const PopularServices = ({ mainTitle, items }: PopularServicesProps) => {
  const navigate = useNavigate();
  const MotionWrapper = motion(Wrapper);
  const MotionButtonsWrapper = motion(ButtonsWrapper);
  const MotionTitle = motion(Title);

  return (
    <MotionWrapper variants={mainTitleVariant}>
      <MotionTitle
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.3,
            ease: "linear",
            duration: 1,
          },
        }}
      >
        {mainTitle}
      </MotionTitle>
      <MotionButtonsWrapper
        variants={variantContainer}
        initial="hidden"
        animate="show"
      >
        {items.map((service, index) => (
          <ServicesButton
            key={index}
            text={service.text}
            startAdornment={<CircularIcon icon={<service.iconName />} />}
            onClick={() =>
              navigate(paths.services, {
                state: {
                  service: service.text,
                },
              })
            }
          />
        ))}
      </MotionButtonsWrapper>
    </MotionWrapper>
  );
};

export default PopularServices;
