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
      <div className="relative bg-[#2c2640] text-white py-20 md:pt-20 pb-10">
        <picture className="absolute top-0 left-0 md:hidden">
          <source media="(max-width: 375px)" srcSet={bgLeftPatternIntroImage} />
          <img src={bgLeftPatternIntroImage} />
        </picture>
        <picture className="max-sm:hidden absolute top-50 left-0 z-0">
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
          <img className="h-62" src={bgRightPatternIntroImageDesktop} />
        </picture>
        <div className="md:flex items-center relative z-1">
          <div className="flex flex-col items-center text-center md:items-start md:text-left mx-5 md:w-90">
            <div className="max-sm:hidden flex items-center justify-center px-5 mb-10">
              <hr className="w-40 border-1 border-gray-300" />
            </div>
            <h1 className="dm-serif-display-regular text-[2.50rem] leading-10 whitespace-pre-line px-5 md:text-[2.70rem]">
              <span className="block">Humanizing</span>
              <span className="block">your insurance.</span>
            </h1>
            <p className="karla-400 text-md px-8 mt-6 md:px-5 text-sm text-gray-300">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </p>
            <a
              className="karla-400 mt-8 border-2 tracking-widest py-2 px-6 md:mx-5 md:text-sm"
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
          <picture className="max-sm:hidden absolute w-80 mr-5 top-0 right-0 lg:top-30">
            <source media="(max-width: 375px)" srcSet={desktopIntroImage} />
            <img src={desktopIntroImage} alt="Desktop intro" />
          </picture>
        </div>
      </div>
    </>
  );
}

export default IntroSection;
