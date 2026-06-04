import NavBarComponent from "./components/navbar/navbar.component";
import IntroSection from "./sections/intro/intro.section";
import OfferingSection from "./sections/offering/offering.section";
import FooterSection from "./sections/footer/footer.section";
import "./App.css";

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
