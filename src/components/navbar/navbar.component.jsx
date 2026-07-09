import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import insureLogo from "../../assets/logo.svg";
import iconHamburger from "../../assets/icon-hamburger.svg";
import iconHamburgerClose from "../../assets/icon-close.svg";

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const iconSrc = isOpen ? iconHamburgerClose : iconHamburger;
  const navLinks = [
    { label: "HOW WE WORK", href: "#" },
    { label: "BLOG", href: "#" },
    { label: "ACCOUNT", href: "#" },
    { label: "VIEW PLANS", href: "#" },
  ];
  const gsapMobileNavContainer = useRef();
  const mobileNavBarTimeline = useRef();
  const { contextSafe } = useGSAP({ scope: gsapMobileNavContainer });

  useGSAP(() => {
    //NavBar Spawning
    gsap.from(".gsap-container", {
      duration: 1,
      y: -100,
      ease: "power1.out",
    });

    //Mobile Hamburger Menu Timeline
    mobileNavBarTimeline.current = gsap.timeline({
      paused: true,
      defaults: { ease: "power4.out" },
    });

    mobileNavBarTimeline.current
      .fromTo(
        ".gsap-mobile-nav-container",
        { height: 0, paddingTop: 0, paddingBottom: 0 },
        {
          height: "375px",
          paddingTop: 32,
          paddingBottom: 32,
          duration: 0.6,
        },
      ).from(".navbar-bg-pattern", {
        delay: 1,
        ease: "none",
        drawSVG: "0",
        duration: 0.8
      }, "<-=80%")
  }, [gsapMobileNavContainer]);

  const handleClick = contextSafe(() => {
    const nextStateValue = !isOpen;
    setIsOpen(nextStateValue);

    if (nextStateValue) {
      mobileNavBarTimeline.current.play();
    } else {
      mobileNavBarTimeline.current.reverse();
    }
  });

  return (
    <div className="sticky top-0 z-999" ref={gsapMobileNavContainer}>
      <div className="gsap-container flex bg-white items-center justify-between w-full px-8 py-2 md:px-10 lg:px-20">
        <img src={insureLogo} alt="Insure Logo" />

        <div className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="px-4 py-2 m-2 border-2 border-transparent text-center text-gray-400 transition duration-300 hover:border-black hover:text-black md:px-2 mx-0 text-sm"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="p-2 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <img src={iconSrc} alt="Navigation menu icon" />
        </button>
      </div>

      <div className="h-0 relative overflow-hidden flex gsap-mobile-nav-container flex-col items-center bg-[#2c2640]">
        <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" width="375" height="218">
          <g fill="none" fill-rule="evenodd" stroke="#96A9C6" stroke-width="1">
            <path className="navbar-bg-pattern" d="M309.564 41.343C213.876 11.406 115.487-38.526 14.757 52.675c-100.73 91.202-164.058 171.093-123.163 274.463 40.896 103.37 207.827 38.985 256.33 131.373 48.503 92.388-58.069 176.237-12.123 258.462 45.945 82.225 81.274 134.924 228.927 82.643 147.654-52.282 134.04-185.308 246.324-263.207 112.283-77.898 233.767-194.516 67.05-402.604C511.383-74.283 405.25 71.28 309.563 41.343z" />
            <path className="navbar-bg-pattern" d="M321.902 90.672c-77.983-24.314-158.17-64.869-240.262 9.205C-.454 173.95-52.065 238.837-18.736 322.794c33.33 83.956 169.376 31.663 208.905 106.7 39.529 75.037-47.325 143.14-9.88 209.922C217.732 706.2 246.524 749 366.86 706.538c120.335-42.463 109.24-150.506 200.75-213.775 91.509-63.269 190.516-157.985 54.644-326.993C486.382-3.238 399.885 114.986 321.902 90.672z" />
            <path className="navbar-bg-pattern" d="M344.947 122.546c-63.103-19.824-127.99-52.889-194.418 7.504-66.43 60.393-108.193 113.297-81.223 181.748s137.057 25.816 169.044 86.995c31.986 61.178-38.296 116.703-7.996 171.152 30.3 54.449 53.599 89.346 150.973 54.725 97.374-34.62 88.396-122.71 162.445-174.293 74.048-51.584 154.164-128.808 44.218-266.603C478.043 45.98 408.05 142.37 344.947 122.546z" />
            <path className="navbar-bg-pattern" d="M368.21 162.166c-50.939-15.88-103.316-42.369-156.94 6.012-53.623 48.382-87.336 90.763-65.565 145.6 21.77 54.836 110.636 20.68 136.457 69.691 25.82 49.01-30.913 93.492-6.454 137.111 24.459 43.62 43.266 71.576 121.87 43.841 78.603-27.734 71.355-98.303 131.13-139.628 59.774-41.324 124.445-103.188 35.693-213.576-88.752-110.388-145.252-33.17-196.19-49.05z" />
            <path className="navbar-bg-pattern" d="M373.18 187.232c-41.598-12.997-84.371-34.675-128.162 4.92-43.79 39.594-71.321 74.28-53.543 119.157 17.779 44.877 90.35 16.925 111.435 57.035 21.086 40.11-25.244 76.513-5.27 112.21 19.974 35.698 35.332 58.577 99.522 35.88 64.19-22.699 58.272-80.452 107.085-114.27 48.814-33.82 101.627-84.45 29.149-174.79-72.478-90.34-118.617-27.146-160.216-40.142z" />
            <path className="navbar-bg-pattern" d="M384.992 205.895c-33.778-10.551-68.51-28.15-104.069 3.994-35.558 32.143-57.914 60.3-43.477 96.731 14.436 36.432 73.365 13.74 90.486 46.3 17.122 32.562-20.498 62.114-4.28 91.093 16.22 28.98 28.691 47.552 80.814 29.127 52.123-18.426 47.317-65.31 86.954-92.765 39.637-27.454 82.522-68.555 23.67-141.893-58.853-73.338-96.32-22.037-130.098-32.587z" />
          </g>
        </svg>
        {navLinks.map((link) => (
          <a
            key={link.label}
            className="gsap-mobile-nav-button p-4 m-2 border-2 border-transparent text-white transition duration-300 text-white hover:border-white"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavBarComponent;
