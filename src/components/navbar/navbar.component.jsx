import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import insureLogo from "../../assets/logo.svg";
import iconHamburger from "../../assets/icon-hamburger.svg";
import iconHamburgerClose from "../../assets/icon-close.svg";

gsap.registerPlugin(useGSAP);

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
        { height: 0, paddingTop: 0, paddingBottom: 0, autoAlpha: 0 },
        {
          height: "375px",
          paddingTop: 32,
          paddingBottom: 32,
          autoAlpha: 1,
          duration: 0.6,
          immediateRender: false,
        },
      )
      .from(
        ".gsap-mobile-nav-button",
        { y: -12, opacity: 1, stagger: 0.08, duration: 0.25 },
        0.1,
      );
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

      <div className="h-0 opacity-0 overflow-hidden flex gsap-mobile-nav-container flex-col items-center bg-[#2c2640] bg-[url('assets/bg-pattern-mobile-nav.svg')] bg-no-repeat bg-bottom bg-contain">
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
