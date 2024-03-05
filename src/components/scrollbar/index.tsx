import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars-2";

const StyledThumb = styled.div`
  background-color: ${({ theme }) => theme.colors.ebonyClay};
  width: 6px;
  border-radius: 6px;
`;

const StyledTrack = styled.div`
  width: 13px;
  max-height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  position: absolute;
  display: flex;
  justify-content: center;
  right: 0px;
  top: 6px;
  padding-top: 6px;
  margin-bottom: 6px;
  bottom: 16px;
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

type ScrollbarProps = {
  children: React.ReactNode;
};

const Scrollbar = ({ children, ...otherProps }: ScrollbarProps) => {
  const renderThumb = () => <StyledThumb />;
  const renderTrack = () => <StyledTrack />;
  return (
    <Scrollbars
      style={{
        width: "99%",
      }}
      autoHide
      autoHeight
      autoHeightMin={0}
      autoHeightMax={300}
      renderThumbVertical={renderThumb}
      renderTrackVertical={renderTrack}
      {...otherProps}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
