import { motion } from "framer-motion";
import Search from "@/components/search";
import PopularServices from "@/components/popular-services";
import PremiumBenefitsSection from "@/components/premium-benefits";
import { POPULAR_SERVICES } from "@/constants/popular-services";
import { PREBEN_OPTIONS } from "@/constants/premium-benefits";
import { MainSection, SiteTitle, SiteTitleSection } from "./index.styled";

const Homepage = () => {
  const SiteTitleSectionMotion = motion(SiteTitleSection);
  return (
    <>
      <MainSection>
        <SiteTitleSectionMotion
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "linear",
              duration: 0.6,
            },
          }}
        >
          <SiteTitle
            title="Book a relevant service for "
            spanColorTitle="your home"
            slogan="In less than 30 seconds"
          />
        </SiteTitleSectionMotion>
        <Search />
        <PopularServices
          mainTitle="popular services"
          items={POPULAR_SERVICES}
        />
      </MainSection>
      <PremiumBenefitsSection
        title="get £300 in credits to use for 10 different services!"
        description="Join 30,000+ Fantastic Club members and access premium benefits for only
        £89/year."
        options={PREBEN_OPTIONS}
      />
    </>
  );
};

export default Homepage;
