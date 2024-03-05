import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: solid 1px #ddd;
  border-radius: 0.6rem;
  padding: 0.4rem 1rem;
  gap: 1rem;
  min-height: 100px;

  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border: solid 1px #ddd;
    flex-shrink: 0;
    flex-wrap: nowrap;
    width: 300px;
    padding: 0.6rem 1.9rem;
    border-radius: 0.6rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  border-radius: 50%;
  padding: 1rem;
  box-shadow: 1px 1px 12px #ddd;
  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    display: flex;
    border-radius: 50%;
    margin-top: 0.7rem;
    padding: 1rem;
    box-shadow: 1px 1px 12px #ddd;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.circular};
`;

type CardBenefitProps = {
  text: string;
  icon: React.ReactNode;
};

const CardBenefit = (props: CardBenefitProps) => {
  return (
    <Wrapper>
      {props.icon && <IconWrapper>{props.icon}</IconWrapper>}
      <Text>{props.text}</Text>
    </Wrapper>
  );
};

export default CardBenefit;
