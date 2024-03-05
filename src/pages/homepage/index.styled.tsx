import { styled } from "styled-components";

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.aqua};
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    padding: 2rem 2rem;
  }
`;

const StyledTitle = styled.h1`
  display: inline-block;
  font-family: "Koulen", sans-serif;
  font-weight: 500;
  font-size: 3rem;
  text-align: center;
  line-height: 3rem;
`;

const SpanColorTitle = styled.span`
  color: ${(props) => props.theme.colors.darkTurquoise};
`;

const Slogan = styled.p`
  font-family: "Circular Std", sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: normal;
  text-align: center;
  color: ${(props) => props.theme.colors.ebonyClay};
  opacity: 0.7;
`;

export const SiteTitle = (props: {
  title: string;
  spanColorTitle: string;
  slogan: string;
}) => (
  <StyledTitle>
    {props.title} <SpanColorTitle>{props.spanColorTitle}</SpanColorTitle>
    <Slogan>{props.slogan}</Slogan>
  </StyledTitle>
);

export const SiteTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// export const siteTitleVariant = {
//   initial: {
//     y: -50,
//     opacity: 0,
//   },
//   animate: {
//     y: 10,
//     opacity: 0,
//     transition: {

//       duration: 2,
//     },
//   },
// };

export const siteTitleVariant = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
      duration: 0.5,
    },
  },
};
