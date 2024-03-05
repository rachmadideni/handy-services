import styled from "styled-components";

const ProgressBarWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.aqua};
`;

const ProgressBarInnerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.aqua};
  margin-bottom: 0rem;
`;

const ProgressBarContainter = styled.div`
  background-color: ${({ theme }) => theme.colors.aqua};
  position: relative;
  height: 0.6rem;
  width: 100%;
`;

const ProgressBarContent = styled.div`
  background-color: ${({ theme }) => theme.colors.darkTurquoise};
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    width: 7%;
  }
`;

const ProgressBar = () => {
  return (
    <ProgressBarWrapper>
      <ProgressBarInnerWrapper>
        <ProgressBarContainter>
          <ProgressBarContent />
        </ProgressBarContainter>
      </ProgressBarInnerWrapper>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
