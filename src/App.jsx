import NavBarComponent from "./components/navbar/navbar.component";
import IntroSection from "./sections/intro/intro.section";
import OfferingSection from "./sections/offering/offering.section";
import FooterSection from "./sections/footer/footer.section";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <NavBarComponent />
      <IntroSection />
      <OfferingSection />
      <FooterSection />
    </>
  );
}

export default App;
