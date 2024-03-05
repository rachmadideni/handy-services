import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 2rem 0rem;
  gap: 0.7rem;
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fontFamily.koulen};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.ebonyClay};
  opacity: 0.7;
  line-height: 0.1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin: auto;
  max-width: 510px;
`;
