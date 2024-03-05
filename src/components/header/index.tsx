import {
  HeaderWrapper,
  Title,
  CallButton,
  ContactNumber,
} from "./index.styled";

import PhoneIcon from "@/components/icons/phone";
import ProgressBar from "@/components/progress-bar";

type HeaderProps = {
  title: string;
  contactNo: string;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <HeaderWrapper>
        <Title>{props.title}</Title>
        <CallButton>
          <PhoneIcon />
          <ContactNumber>{props.contactNo}</ContactNumber>
        </CallButton>
      </HeaderWrapper>
      <ProgressBar />
    </>
  );
};

export default Header;
