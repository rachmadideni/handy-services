import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.aqua};
  height: 100vh;
  min-height: 100%;
  padding: 0rem 2rem;
`;

export const ServiceTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.koulen};
  font-size: 3rem;
  text-align: center;
  line-height: 3rem;
`;
