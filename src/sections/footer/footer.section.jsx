import insureLogo from "../../assets/logo.svg";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconPinterest from "../../assets/icon-pinterest.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import bgFooterMobile from "../../assets/bg-pattern-footer-mobile.svg";
import bgFooterDesktop  from "../../assets/bg-pattern-footer-desktop.svg";

function FooterSection() {
  return (
    <>
      <div className="relative flex flex-col bg-[#fafafa] lg:px-20">
        <img className="lg:hidden absolute top-0 left-0 w-full" src={bgFooterMobile} alt="Footer Background" />
        <img className="max-lg:hidden absolute top-0 left-0 w-2/4" src={bgFooterDesktop} alt="Footer Background" />
        <div className="z-1 flex flex-col items-center mt-25 lg:flex-row lg:justify-between">
          <img className="mb-10 z-1 lg:mb-0" src={insureLogo} alt="Insure Logo" />
          <div className="w-40 flex justify-around">
            <img src={iconFacebook} alt="Facebook Icon" />
            <img src={iconTwitter} alt="Twitter Icon" />
            <img src={iconPinterest} alt="Pinterest Icon" />
            <img src={iconInstagram} alt="Instagram Icon" />
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-5 lg:w-full">
          <hr className="w-72 border-1 border-gray-300 lg:w-full" />
        </div>

        <div className="flex flex-col z-1 mb-10 lg:w-7/8 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <p className="my-5 karla-700 text-gray-400">OUR COMPANY</p>
            <a href="#" className="my-2">HOW WE WORK</a>
            <a href="#" className="my-2">WHY INSURE?</a>
            <a href="#" className="my-2">VIEW PLANS</a>
            <a href="#" className="my-2">REVIEWS</a>
          </div>
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <p className="my-5 karla-700 text-gray-400">HELP ME</p>
            <a href="#" className="my-2">FAQ</a>
            <a href="#" className="my-2">TERMS OF USE</a>
            <a href="#" className="my-2">PRIVACY POLICY</a>
            <a href="#" className="my-2">COOKIES</a>
          </div>
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <p className="my-5 karla-700 text-gray-400">CONTACT</p>
            <a href="#" className="my-2">SALES</a>
            <a href="#" className="my-2">SUPPORT</a>
            <a href="#" className="my-2">LIVE CHAT</a>
          </div>
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <p className="my-5 karla-700 text-gray-400">OTHERS</p>
            <a href="#" className="my-2">CAREERS</a>
            <a href="#" className="my-2">PRESS</a>
            <a href="#" className="my-2">LICENSES</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
