import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  height: 80px;
  background-color: white;
  padding: 0px 8px 0 8px;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-color: #232e41;
  margin: 0 2rem;

  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    padding: 0px 20px 0 20px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.koulen};
  font-weight: 400;
  font-size: 24px;
  text-transform: capitalize;
`;

export const CallButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 12px;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.emeral};
  color: white;
  font-size: medium;
  cursor: pointer;
  border: none;
  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    padding: 0px 12px;
  }
`;

export const ContactNumber = styled.p`
  display: none;
  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    display: block;
  }
`;
