import ServiceDetail from "./components/detail";
import ServiceHero from "./components/hero";
import ServiceSection from "./components/services";
import TechnologiesUsed from "./components/technologies";

const ServicePage = () => {
  return (
    <section className="flex flex-col justify-center py-10 space-y-10">
      <ServiceHero />
      <ServiceDetail />
      <ServiceSection />
      <TechnologiesUsed />
    </section>
  );
};

export default ServicePage;
