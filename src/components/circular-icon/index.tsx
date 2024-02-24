import { cn } from "../../utils";
type CircularIconProps = {
  icon: React.ReactNode;
  // backgroundColor?: string;
  className?: string;
};

const CircularIcon = ({
  icon,
  className,
}: // backgroundColor = "#E6F5F3",
CircularIconProps) => {
  return (
    <div
      className={cn(
        `flex items-center justify-center bg-[#E6F5F3] rounded-full p-[6px] w-[28px] h-[28px] text-[#05C8C6]`,
        className
      )}
    >
      {icon}
    </div>
  );
};

export default CircularIcon;
