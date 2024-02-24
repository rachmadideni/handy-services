import CircularIcon from "../circular-icon";

type CardProps = {
  iconName?: React.ReactElement;
  text: string;
};

const Card = ({ iconName, text }: CardProps) => {
  return (
    <div className="flex flex-col justify-center w-full gap-2 px-4 py-2 border-[.71px] rounded-md border-ebonyClay border-opacity-10">
      <div className="flex flex-row sm:flex-col sm:items-start items-center gap-2">
        {iconName && (
          <CircularIcon
            className="w-10 h-10 p-2 bg-white shadow-lg rounded-full"
            icon={iconName}
          />
        )}
        <p className="font-circular font-normal text-ebonyClay opacity-50">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
