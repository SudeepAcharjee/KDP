import LearningSteps from "./components/3rd";
import FAQSection from "./components/FAQ";

import EventPlannerShowcase from "./components/Showcase";


import ChooseUs from "./components/chooseus";

import CoreValuesSection from "./components/corevalue";
import HomeHero from "./components/hero";

import Stats from "./components/stats";


const HomePage = () => {
  return (
    <>
      <section className="flex flex-col justify-center pt-10 space-y-10">
        <HomeHero />
         <EventPlannerShowcase/>
         <LearningSteps/>
         <Stats />
        <ChooseUs />
        <FAQSection/>
        <CoreValuesSection/>
       </section>
       </>
  );
};

export default HomePage;