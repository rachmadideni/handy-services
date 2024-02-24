import { motion } from "framer-motion";

const mainTitleVariant = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 10,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const MainTitle = () => {
  return (
    <motion.div variants={mainTitleVariant}>
      <h1 className="font-koulen text-3xl sm:text-5xl  uppercase text-center leading-tight ">
        Book a relevant service for{" "}
        <span className="text-darkTurquoise">your home</span>
      </h1>
      <p className="font-circular font-thin text-[22px] text-center text-ebonyClay opacity-70">
        In less than 30 seconds
      </p>
    </motion.div>
  );
};

export default MainTitle;
