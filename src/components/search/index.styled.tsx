import { forwardRef } from "react";
import { styled } from "styled-components";
import { SearchBarWrapperProps } from ".";

const SearchBar = forwardRef((props, ref) => <div {...props} ref={ref} />);

export const SearchBarWrapper = styled(SearchBar)<SearchBarWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    max-width: 40%;
    width: 40%;
    box-shadow: 0 0 3px 0 ${({ theme }) => theme.colors.paleTeal};
    border: solid 0.1px
      ${(props) =>
        props.$isFocus ? props.theme.colors.paleTeal : "transparent"};
    border-radius: 0.4rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 13px 13px 13px 21px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-radius: 0.5rem;
  align-items: center;
  background-color: white;
  gap: 0px;
`;

export const Input = styled.input`
  width: 100%;
  height: 22px;
  padding: 0 0.6rem;
  font-family: ${(props) => props.theme.fontFamily.circular};
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.ebonyClay};
  appearance: none;
  outline: none;
  border-style: none;
  border-width: 0px;
  border-color: transparent;
`;

export const SearchResultContainer = styled.div`
  width: 93%;
  position: absolute;
  z-index: 10;
  top: 60px;
  left: -0;
  max-height: 300px;
  background-color: white;
  padding-left: 1.3rem;
  padding-bottom: 0.5rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 3px 0 ${({ theme }) => theme.colors.paleTeal};
  border: solid 0.1px ${({ theme }) => theme.colors.paleTeal};
  overflow-y: scroll;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    width: 96%;
  }
`;

export const ListResult = styled.a<React.HTMLAttributes<HTMLAnchorElement>>`
  font-family: ${({ theme }) => theme.fontFamily.circular};
  font-weight: 500;
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
  border-bottom: solid 0.7px ${(props) => props.theme.colors.lightGray};
  cursor: pointer;
`;

export const ListCategory = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.koulen};
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.06rem;
  display: flex;
  flex-direction: column;
  padding: 0rem 0rem 1rem 0rem;
  text-transform: uppercase;
`;

export const MotionSearchBarWrapperVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};
