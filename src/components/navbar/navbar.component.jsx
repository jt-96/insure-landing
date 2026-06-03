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
    <div className="sticky top-0">
      <div className="flex bg-white items-center justify-between w-full p-8">
        <img src={insureLogo} alt="Insure Logo" />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="text-sm font-medium text-slate-700 transition duration-300 hover:text-slate-900"
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
        className={`${isOpen ? "flex" : "hidden"} fixed w-full flex-col items-center pt-8 pb-70 bg-[url('assets/bg-pattern-mobile-nav.svg')] bg-no-repeat bg-bottom bg-cover`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            className="w-75 p-4 m-2 border-2 border-transparent transition duration-300 hover:border-white"
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
