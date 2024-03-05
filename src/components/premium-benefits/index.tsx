import CardBenefit from "../card-benefit";
import {
  PrebenSection,
  TitleWrapper,
  Title,
  Description,
  CardSection,
} from "./index.styled";

type PrebenOptionsProps = {
  text: string;
  icon: React.ReactNode;
};

type PremiumBenefitsSectionProps = {
  title: string;
  description: string;
  options?: PrebenOptionsProps[];
};

const PremiumBenefitsSection = (props: PremiumBenefitsSectionProps) => {
  const { title, description, options } = props;
  return (
    <PrebenSection>
      <TitleWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleWrapper>
      <CardSection>
        {options?.map((option, id) => (
          <CardBenefit key={id} text={option.text} icon={option.icon} />
        ))}
      </CardSection>
    </PrebenSection>
  );
};

export default PremiumBenefitsSection;
