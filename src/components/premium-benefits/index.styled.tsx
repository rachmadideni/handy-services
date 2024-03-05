import { styled } from "styled-components";

export const PrebenSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 60px;
  padding: 60px 10px;
  margin: 0 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const Title = styled.span`
  display: inline-flex;
  font-family: ${(props) => props.theme.fontFamily.koulen};
  font-size: 28px;
  color: ${(props) => props.theme.colors.ebonyClay};
  padding: 0;
  line-height: 1.2;
`;

export const Description = styled.span`
  display: inline-flex;
  font-family: ${(props) => props.theme.fontFamily.circular};
  font-weight: 600;
  color: ${(props) => props.theme.colors.ebonyClay};
  opacity: 0.7;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    flex-direction: row;
  }
`;
