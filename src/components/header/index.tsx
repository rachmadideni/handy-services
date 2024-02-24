import PhoneIcon from "@/components/icons/phone";
import ProgressBar from "../progress-bar";

type HeaderProps = {
  title: string;
  contactNo: string;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <header className="flex w-full bg-white px-8 sm:px-20 items-center justify-between h-[80px] border-b-2 border-[##232E41]">
        <h1 role="heading" className="font-koulen text-[24px] capitalize">
          {props.title}
        </h1>
        <button
          role="button"
          className="flex items-center gap-[5px] px-[12px] py-[10px] rounded-md bg-emerald-400 text-white font-medium"
        >
          <PhoneIcon />
          <p className="hidden sm:block">{props.contactNo}</p>
        </button>
      </header>
      <ProgressBar />
    </>
  );
};

export default Header;
