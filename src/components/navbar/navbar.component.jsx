import insureLogo from "../../assets/logo.svg";
import hamburgerClose from "../../assets/icon-close.svg";

function NavBarComponent() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center w-full bg-white p-8">
          <img src={insureLogo} alt="Insure Logo" />
          <img src={hamburgerClose} alt="Hamburger Menu Close Icon" />
        </div>
        <div className="flex flex-col items-center pt-8 pb-70 bg-[url('assets/bg-pattern-mobile-nav.svg')] bg-no-repeat bg-bottom">
            <a className="w-75 p-4 m-2 border-2 border-transparent transition duration-300 hover:border-white" href="#">HOW WE WORK</a>
            <a className="w-75 p-4 m-2 border-2 border-transparent transition duration-300 hover:border-white" href="#">BLOG</a>
            <a className="w-75 p-4 m-2 border-2 border-transparent transition duration-300 hover:border-white" href="#">ACCOUNT</a>
            <a className="w-75 p-4 m-2 border-2 border-transparent transition duration-300 hover:border-white" href="#">VIEW PLANS</a>
        </div>
      </div>
    </>
  );
}

export default NavBarComponent;
