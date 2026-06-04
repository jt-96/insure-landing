import mobileIntroImage from "../../assets/image-intro-mobile.jpg";
import desktopIntroImage from "../../assets/image-intro-desktop.jpg";
import bgLeftIntroImage from "../../assets/bg-pattern-intro-left-mobile.svg";
import bgRightIntroImage from "../../assets/bg-pattern-intro-right-mobile.svg";

function IntroSection() {
  return (
    <>
      <picture>
        <source media="(max-width: 375px)" srcSet={mobileIntroImage} />
        <img src={desktopIntroImage} alt="Desktop intro" />
      </picture>
      <div className="relative bg-[#2c2640] text-white py-20">
        <picture className="absolute top-0 left-0">
          <source media="(max-width: 375px)" srcSet={bgLeftIntroImage} />
          <img src={bgLeftIntroImage} />
        </picture>
        <div className="flex flex-col items-center text-center">
          <h1 className="dm-serif-display-regular !text-5xl whitespace-pre-line px-10">
            Humanizing your insurance.
          </h1>
          <p className="karla-400 !text-lg px-8 mt-6">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a
            className="karla-700 mt-8 border-2 tracking-widest py-2 px-4"
            href="#"
          >
            VIEW PLANS
          </a>
          <picture className="absolute right-0 -bottom-50">
            <source media="(max-width: 375px)" srcSet={bgRightIntroImage} />
            <img src={bgRightIntroImage} />
          </picture>
        </div>
      </div>
    </>
  );
}

export default IntroSection;
