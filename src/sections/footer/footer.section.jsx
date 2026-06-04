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
          <img className="mb-10" src={insureLogo} alt="Insure Logo" />
          <div className="w-40 flex justify-around">
            <img src={iconFacebook} alt="Facebook Icon" />
            <img src={iconTwitter} alt="Twitter Icon" />
            <img src={iconPinterest} alt="Pinterest Icon" />
            <img src={iconInstagram} alt="Instagram Icon" />
          </div>
        </div>

        <div className="flex items-center justify-center my-10">
          <hr className="w-96 border-1 border-gray-300" />
        </div>

        <div className="flex flex-col mb-10">
          <div className="flex flex-col items-center mb-10">
            <p className="my-5 karla-400">OUR COMPANY</p>
            <a href="#" className="my-2 karla-700">HOW WE WORK</a>
            <a href="#" className="my-2 karla-700">WHY INSURE?</a>
            <a href="#" className="my-2 karla-700">CHECK PRICE</a>
            <a href="#" className="my-2 karla-700">REVIEWS</a>
          </div>
          <div className="flex flex-col items-center mb-10">
            <p className="my-5 karla-400">HELP ME</p>
            <a href="#" className="my-2 karla-700">FAQ</a>
            <a href="#" className="my-2 karla-700">TERMS OF USE</a>
            <a href="#" className="my-2 karla-700">PRIVACY POLICY</a>
            <a href="#" className="my-2 karla-700">COOKIES</a>
          </div>
          <div className="flex flex-col items-center mb-10">
            <p className="my-5 karla-400">CONTACT</p>
            <a href="#" className="my-2 karla-700">SALES</a>
            <a href="#" className="my-2 karla-700">SUPPORT</a>
            <a href="#" className="my-2 karla-700">LIVE CHAT</a>
          </div>
          <div className="flex flex-col items-center mb-10">
            <p className="my-5 karla-400">OTHERS</p>
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
