import NavBarComponent from "./components/navbar/navbar.component";
import IntroSection from "./sections/intro/intro.section";
import OfferingSection from "./sections/offering/offering.section";
import "./App.css";

function App() {
  return (
    <>
      <NavBarComponent />
      <IntroSection />
      <OfferingSection />
    </>
  );
}

export default App;
