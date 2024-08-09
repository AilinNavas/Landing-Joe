import Bonus from "./ui/Bonus";
import Faqs from "./ui/Faqs";
import ForYou from "./ui/ForYou";
import Hero from "./ui/Hero";
import InfoTop from "./ui/InfoTop";
import Results from "./ui/Results";
import Services from "./ui/Services";
import Stop from "./ui/Stop";
import Testimonial from "./ui/Testimonial";

export default function Home() {
  return (
    <>
    <InfoTop />
    <Hero />
    <ForYou />
    <Testimonial />
    <Stop />
    <Results />
    <Services />
    <Bonus />
    <Faqs />
    </>
  );
}
