/* eslint-disable react/no-children-prop */
// import Transition from "../home/components/try";
import ExpertiseSection from "./components/Expertise";
// import { Lamp } from "./components/Lamp";
import WhyWeShine from "./components/Whyweshine";
import HeroSection from "./components/hero";
// import AboutConnect from "./components/connect";
// import HeroSection from "./components/hero";
// import AboutHero from "./components/hero";
// import MoreDetails from "./components/missionvission";
import DiscoverRenderOps from "./components/stats";

import HowWeWork from "./components/work";

const About = () => {
  return (
    <section className="flex flex-col justify-center py-10 space-y-10">
      <HeroSection/>
      <DiscoverRenderOps/>
      <HowWeWork />
      <ExpertiseSection/>
      {/* <MoreDetails /> */}
      {/* <Transition/>
      <AboutConnect />
      <Lamp /> */}
      <WhyWeShine />
    </section>
  );
};

export default About;
