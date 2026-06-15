import mobileIntroImage from "../../assets/image-intro-mobile.jpg";
import desktopIntroImage from "../../assets/image-intro-desktop.jpg";
import bgLeftPatternIntroImage from "../../assets/bg-pattern-intro-left-mobile.svg";
import bgRightPatternIntroImage from "../../assets/bg-pattern-intro-right-mobile.svg";
import bgLeftPatternIntroImageDesktop from "../../assets/bg-pattern-intro-left-desktop.svg";
import bgRightPatternIntroImageDesktop from "../../assets/bg-pattern-intro-right-desktop.svg";

function IntroSection() {
  return (
    <>
      <picture className="md:hidden">
        <source media="(max-width: 375px)" srcSet={mobileIntroImage} />
        <img src={desktopIntroImage} alt="Mobile intro" />
      </picture>
      <div className="relative bg-[#2c2640] text-white pt-20 pb-10 md:py-20">
        <picture className="absolute top-0 left-0 md:hidden">
          <source media="(max-width: 375px)" srcSet={bgLeftPatternIntroImage} />
          <img src={bgLeftPatternIntroImage} />
        </picture>
        <picture className="max-sm:hidden absolute top-50 left-0 z-0 lg:top-75">
          <source
            media="(min-width: 375px)"
            srcSet={bgLeftPatternIntroImageDesktop}
          />
          <img className="h-75" src={bgLeftPatternIntroImageDesktop} />
        </picture>
        <picture className="max-sm:hidden absolute top-0 right-0 z-2">
          <source
            media="(min-width: 375px)"
            srcSet={bgRightPatternIntroImageDesktop}
          />
          <img className="h-62 lg:w-full lg:h-96" src={bgRightPatternIntroImageDesktop} />
        </picture>
        <div className="md:flex items-center relative z-1 w-full">
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:mx-5 md:w-90 lg:w-1/2">
            <div className="max-sm:hidden px-5 mb-10 lg:px-15">
              <hr className="w-40 border-1 border-gray-200" />
            </div>
            <h1 className="text-[2.30rem] leading-10 md:px-5 md:text-[2.70rem] lg:px-15">
              <span className="block">Humanizing</span>
              <span className="block">your insurance.</span>
            </h1>
            <p className="px-8 mt-6 text-sm text-gray-300 md:px-5 lg:px-15">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </p>
            <a
              className="mt-8 border-2 tracking-widest py-2 px-6 md:mx-5 md:text-sm lg:mx-15"
              href="#"
            >
              VIEW PLANS
            </a>
            <picture className="absolute right-0 -bottom-50 md:hidden">
              <source
                media="(max-width: 375px)"
                srcSet={bgRightPatternIntroImage}
              />
              <img src={bgRightPatternIntroImage} />
            </picture>
          </div>
          <picture className="max-sm:hidden absolute w-80 mr-5 top-5 right-0 lg:top-0 lg:right-15 lg:w-90">
            <source media="(max-width: 375px)" srcSet={desktopIntroImage} />
            <img src={desktopIntroImage} alt="Desktop intro" />
          </picture>
        </div>
      </div>
    </>
  );
}

export default IntroSection;
