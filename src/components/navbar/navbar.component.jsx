import { useState } from "react";
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

  return (
    <div className="sticky top-0 z-999">
      <div className="flex bg-white items-center justify-between w-full px-8 py-2 md:px-10 lg:px-20">
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
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <img src={iconSrc} alt="Navigation menu icon" />
        </button>
      </div>

      <div
        className={`${isOpen ? "flex" : "hidden"} flex-col items-center py-8 bg-[#2c2640] bg-[url('assets/bg-pattern-mobile-nav.svg')] bg-no-repeat bg-bottom bg-contain`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            className="p-4 m-2 border-2 border-transparent text-white transition duration-300 text-white hover:border-white"
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
