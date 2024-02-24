import React from "react";
import { motion } from "framer-motion";
import ServicesButton from "../services-button";
import CircularIcon from "../circular-icon";

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
  initial: { y: -10, opacity: 0 },
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
  return (
    <>
      <motion.div
        variants={mainTitleVariant}
        className="flex flex-col w-full items-center"
      >
        <p className="font-koulen text-xl text-ebonyClay opacity-70">
          {mainTitle}
        </p>
      </motion.div>
      <motion.div
        variants={variantContainer}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-3 w-full mx-auto max-w-[500px]"
      >
        {items.map((service, index) => (
          <ServicesButton
            key={index}
            text={service.text}
            startAdornment={<CircularIcon icon={<service.iconName />} />}
          />
        ))}
      </motion.div>
    </>
  );
};

export default PopularServices;
