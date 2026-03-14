import FAQSection from "./components/FAQ";

import EventPlannerShowcase from "./components/Showcase";


import ChooseUs from "./components/chooseus";

import CoreValuesSection from "./components/corevalue";
import HomeHero from "./components/hero";

import Stats from "./components/stats";
import AdditionalServices from "./components/AdditionalServices";


const HomePage = () => {
  return (
    <>
      <section className="flex flex-col justify-center pt-10 space-y-10">
        <HomeHero />
         <EventPlannerShowcase/>

         <AdditionalServices />
         <Stats />
        <ChooseUs />
        <FAQSection/>
        <CoreValuesSection/>
       </section>
       </>
  );
};

export default HomePage;