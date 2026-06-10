import insureLogo from "../../assets/logo.svg";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconPinterest from "../../assets/icon-pinterest.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import bgFooterMobile from "../../assets/bg-pattern-footer-mobile.svg";

function FooterSection() {
  return (
    <>
      <div className="relative flex flex-col items-center bg-[#fafafa]">
        <img className="absolute top-0 left-0 w-full" src={bgFooterMobile} alt="Footer Background" />
        <div className="w-full flex flex-col items-center mt-25">
          <img className="mb-10 z-1" src={insureLogo} alt="Insure Logo" />
          <div className="w-40 flex justify-around">
            <img className="z-1" src={iconFacebook} alt="Facebook Icon" />
            <img className="z-1" src={iconTwitter} alt="Twitter Icon" />
            <img className="z-1" src={iconPinterest} alt="Pinterest Icon" />
            <img className="z-1" src={iconInstagram} alt="Instagram Icon" />
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 mb-5">
          <hr className="w-72 border-1 border-gray-300" />
        </div>

        <div className="flex flex-col mb-10">
          <div className="flex flex-col items-center mb-10">
            <p className="my-5 karla-700 text-gray-400">OUR COMPANY</p>
            <a href="#" className="my-2 karla-700">HOW WE WORK</a>
            <a href="#" className="my-2 karla-700">WHY INSURE?</a>
            <a href="#" className="my-2 karla-700">CHECK PRICE</a>
            <a href="#" className="my-2 karla-700">REVIEWS</a>
          </div>
          <div className="flex flex-col items-center mb-10">
            <p className="my-5 karla-700 text-gray-400">HELP ME</p>
            <a href="#" className="my-2 karla-700">FAQ</a>
            <a href="#" className="my-2 karla-700">TERMS OF USE</a>
            <a href="#" className="my-2 karla-700">PRIVACY POLICY</a>
            <a href="#" className="my-2 karla-700">COOKIES</a>
          </div>
          <div className="flex flex-col items-center mb-10">
            <p className="my-5 karla-700 text-gray-400">CONTACT</p>
            <a href="#" className="my-2 karla-700">SALES</a>
            <a href="#" className="my-2 karla-700">SUPPORT</a>
            <a href="#" className="my-2 karla-700">LIVE CHAT</a>
          </div>
          <div className="flex flex-col items-center mb-10">
            <p className="my-5 karla-700 text-gray-400">OTHERS</p>
            <a href="#" className="my-2 karla-700">CAREERS</a>
            <a href="#" className="my-2 karla-700">PRESS</a>
            <a href="#" className="my-2 karla-700">LICENSES</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
