import { motion } from "framer-motion";

type ServicesButtonProps = {
  text: string;
  startAdornment: React.ReactNode;
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ServicesButton = (props: ServicesButtonProps) => {
  return (
    <motion.div
      variants={item}
      className="flex items-center bg-white py-[6px] px-2 gap-2 rounded-md border"
    >
      {props.startAdornment}
      <span className="text-[13px] font-semibold capitalize">{props.text}</span>
    </motion.div>
  );
};

export default ServicesButton;
