import insureLogo from "../../assets/logo.svg";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconPinterest from "../../assets/icon-pinterest.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import bgFooterMobile from "../../assets/bg-pattern-footer-mobile.svg";
import bgFooterDesktop from "../../assets/bg-pattern-footer-desktop.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function FooterSection() {
  useGSAP(() => {
    gsap.from(".footer-mobile-bg-pattern", {
      ease: "none",
      drawSVG: "0",
      duration: 2,
      scrollTrigger: {
        trigger: ".footer-container",
        start: "-50px center",
        end: "500px center",
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    });

    gsap.from(".footer-logo, .footer-socials-logo", {
      y: 10,
      opacity: 0,
      ease: "power4.out",
      duration: 0.75,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top center",
        end: "400px center",
        toggleActions: "play reverse play reverse",
        // markers: true
      }
    })

    gsap.from(".footer-sitemap-title, .footer-sitemap-link", {
      y: 5,
      opacity: 0,
      ease: "power4.out",
      duration: 0.30,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".footer-sitemap-container",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
        // markers: true
      }
    })
  });

  return (
    <>
      <div className="footer-container relative flex flex-col bg-[#fafafa] lg:px-20">
        {/* FOOTER MOBILE BACKGROUND */}
        <svg
          className="lg:hidden absolute top-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="374"
          height="173"
        >
          <g fill="none" fill-rule="evenodd" stroke="#E4E4E4">
            <path
              className="footer-mobile-bg-pattern"
              d="M72.361 139.675c75.703 23.693 153.543 63.212 233.235-8.97C385.29 58.523 435.39-4.709 403.036-86.522c-32.354-81.814-164.422-30.855-202.794-103.977-38.373-73.122 45.94-139.485 9.591-204.563-36.35-65.078-64.3-106.787-181.115-65.409C-88.098-419.092-77.327-313.807-166.16-252.153-254.993-190.499-351.104-98.2-219.206 66.494S-3.341 115.98 72.36 139.674z"
            />
            <path
              className="footer-mobile-bg-pattern"
              d="M62.895 101.751c61.583 19.24 124.905 51.33 189.734-7.283 64.828-58.614 105.585-109.959 79.266-176.393-26.32-66.434-133.755-25.055-164.971-84.43-31.216-59.377 37.372-113.266 7.802-166.11-29.57-52.845-52.306-86.713-147.334-53.113-95.028 33.6-86.267 119.094-158.53 169.158-72.265 50.064-150.45 125.012-43.153 258.747S1.312 82.511 62.895 101.751z"
            />
            <path
              className="footer-mobile-bg-pattern"
              d="M45.188 76.583C95.15 92.28 146.522 118.465 199.117 70.64c52.594-47.825 85.66-89.72 64.307-143.926-21.353-54.206-108.513-20.443-133.838-68.89-25.325-48.448 30.32-92.418 6.33-135.536-23.99-43.117-42.436-70.752-119.531-43.336-77.095 27.415-69.987 97.173-128.614 138.022-58.627 40.85-122.058 102.003-35.009 211.122C-60.189 137.216-4.773 60.884 45.188 76.583z"
            />
            <path
              className="footer-mobile-bg-pattern"
              d="M26.684 45.816c40.295 12.596 81.728 33.603 124.147-4.768 42.419-38.371 69.087-71.984 51.865-115.475-17.221-43.491-87.518-16.402-107.943-55.273-20.425-38.87 24.453-74.148 5.105-108.743s-34.225-56.767-96.404-34.77c-62.179 21.996-56.446 77.965-103.73 110.739-47.284 32.774-98.442 81.839-28.236 169.388C-58.305 94.464-13.61 33.221 26.684 45.816z"
            />
            <path
              className="footer-mobile-bg-pattern"
              d="M21.917 25.954c32.91 10.295 66.749 27.467 101.393-3.897 34.643-31.365 56.424-58.84 42.358-94.389-14.065-35.549-71.477-13.407-88.158-45.179-16.682-31.772 19.971-60.609 4.17-88.886-15.803-28.277-27.953-46.4-78.735-28.42-50.782 17.979-46.1 63.727-84.718 90.516-38.617 26.79-80.398 66.895-23.06 138.457 57.339 71.562 93.841 21.503 126.75 31.798z"
            />
            <path
              className="footer-mobile-bg-pattern"
              d="M12.775 11.594c26.718 8.36 54.191 22.305 82.318-3.165 28.127-25.47 45.81-47.78 34.39-76.649-11.419-28.868-58.03-10.887-71.574-36.688-13.544-25.8 16.214-49.217 3.385-72.18-12.83-22.963-22.694-37.68-63.923-23.08-41.229 14.6-37.428 51.75-68.78 73.505-31.353 21.755-65.275 54.323-18.723 112.435C-43.579 43.884-13.944 3.234 12.775 11.594z"
            />
          </g>
        </svg>
        <img
          className="max-lg:hidden absolute top-0 left-0 w-2/4"
          src={bgFooterDesktop}
          alt="Footer Background"
        />
        <div className="z-1 flex flex-col items-center mt-25 lg:flex-row lg:justify-between">
          <img className="footer-logo mb-10 z-1 lg:mb-0" src={insureLogo} alt="Insure Logo" />
          <div className="w-40 flex justify-around">
            <img className="footer-socials-logo" src={iconFacebook} alt="Facebook Icon" />
            <img className="footer-socials-logo" src={iconTwitter} alt="Twitter Icon" />
            <img className="footer-socials-logo" src={iconPinterest} alt="Pinterest Icon" />
            <img className="footer-socials-logo" src={iconInstagram} alt="Instagram Icon" />
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-5 lg:w-full">
          <hr className="w-72 border-1 border-gray-300 lg:w-full" />
        </div>

        <div className="footer-sitemap-container flex flex-col z-1 mb-10 lg:w-7/8 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <p className="footer-sitemap-title my-5 karla-700 text-gray-400">OUR COMPANY</p>
            <a href="#" className="footer-sitemap-link my-2">HOW WE WORK</a>
            <a href="#" className="footer-sitemap-link my-2">WHY INSURE?</a>
            <a href="#" className="footer-sitemap-link my-2">VIEW PLANS</a>
            <a href="#" className="footer-sitemap-link my-2">REVIEWS</a>
          </div>
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <p className="footer-sitemap-title my-5 karla-700 text-gray-400">HELP ME</p>
            <a href="#" className="footer-sitemap-link my-2">FAQ</a>
            <a href="#" className="footer-sitemap-link my-2">TERMS OF USE</a>
            <a href="#" className="footer-sitemap-link my-2">PRIVACY POLICY</a>
            <a href="#" className="footer-sitemap-link my-2">COOKIES</a>
          </div>
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <p className="footer-sitemap-title my-5 karla-700 text-gray-400">CONTACT</p>
            <a href="#" className="footer-sitemap-link my-2">SALES</a>
            <a href="#" className="footer-sitemap-link my-2">SUPPORT</a>
            <a href="#" className="footer-sitemap-link my-2">LIVE CHAT</a>
          </div>
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <p className="footer-sitemap-title my-5 karla-700 text-gray-400">OTHERS</p>
            <a href="#" className="footer-sitemap-link my-2">CAREERS</a>
            <a href="#" className="footer-sitemap-link my-2">PRESS</a>
            <a href="#" className="footer-sitemap-link my-2">LICENSES</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
