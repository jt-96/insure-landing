import mobileIntroImage from "../../assets/image-intro-mobile.jpg";
import desktopIntroImage from "../../assets/image-intro-desktop.jpg";
import bgLeftPatternIntroImage from "../../assets/bg-pattern-intro-left-mobile.svg";
import bgRightPatternIntroImage from "../../assets/bg-pattern-intro-right-mobile.svg";
import bgLeftPatternIntroImageDesktop from "../../assets/bg-pattern-intro-left-desktop.svg";
import bgRightPatternIntroImageDesktop from "../../assets/bg-pattern-intro-right-desktop.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

function IntroSection() {
  useGSAP(() => {
    gsap.to(".intro-title", {
      y: -10,
      opacity: 1,
      scrollTrigger: {
        trigger: ".intro",
        start: "top center",
        end: "top 100px",
        // start: "25% center",
        // end: "800px 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    document.fonts.ready.then(() => {
      let split = SplitText.create(".intro-subtitle", {
        type: "words, lines",
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.lines, {
            y: 25,
            autoAlpha: 0,
            stagger: 0.05,
            delay: 0.75,
            scrollTrigger: {
              trigger: ".intro",
              start: "top center",
              // start: "50% center",
              // end: "800px 90%",
              end: "top 100px",
              // markers: true,
              toggleActions: "play reverse play reverse",
            },
          });
        },
      });
    });

    gsap.from(".left-pattern-mobile-svg", {
      duration: 1,
      ease: "none",
      drawSVG: "0",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".intro",
        start: "top center",
        end: "bottom 60%",
        scrub: 1,
        markers: true
      }
    });
  });

  return (
    <>
      <div className="">
        <picture className="md:hidden">
          <source media="(max-width: 425px)" srcSet={mobileIntroImage} />
          <img className="w-full" src={mobileIntroImage} alt="Mobile intro" />
        </picture>
      </div>
      <div className="intro relative bg-[#2c2640] text-white pt-20 pb-10 md:py-20">
        {/* PREVIOUS IMPLEMENTATION - NOT WORKING WITH GSAP'S DRAWSVG */}
        {/* <picture className="absolute top-0 left-0 md:hidden">
          <source media="(max-width: 375px)" srcSet={bgLeftPatternIntroImage} />
          <img className="left-pattern-svg" src={bgLeftPatternIntroImage} />
        </picture> */}
        {/* LEFT PATTERN MOBILE IMAGE */}
        <svg className="absolute top-0 left-0 md:hidden" xmlns="http://www.w3.org/2000/svg" width="168" height="165">
          <g fill="none" fill-rule="evenodd" stroke="#96A9C6" stroke-width="1">
            <path className="left-pattern-mobile-svg" d="M-20.97-256.987c-52.677-16.501-106.841-44.025-162.294 6.247-55.453 50.272-90.316 94.31-67.803 151.29 22.514 56.979 114.411 21.488 141.113 72.415 26.7 50.926-31.968 97.145-6.674 142.469 25.293 45.324 44.742 74.373 126.027 45.554C90.684 132.17 83.189 58.843 145.002 15.904c61.814-42.94 128.692-107.221 36.912-221.924-91.78-114.702-150.207-34.465-202.884-50.967z" />
            <path className="left-pattern-mobile-svg" d="M-13.955-230.22c-42.902-13.399-87.015-35.746-132.178 5.072-45.163 40.818-73.556 76.574-55.22 122.838 18.335 46.265 93.18 17.449 114.926 58.798 21.747 41.349-26.035 78.877-5.435 115.677 20.6 36.801 36.44 60.387 102.64 36.988 66.201-23.399 60.098-82.937 110.44-117.8 50.343-34.865 104.81-87.059 30.062-180.19C76.532-281.97 28.947-216.823-13.955-230.22z" />
            <path className="left-pattern-mobile-svg" d="M-1.61-212.607c-34.755-10.916-70.492-29.123-107.08 4.132-36.587 33.255-59.59 62.386-44.735 100.078 14.854 37.693 75.487 14.216 93.105 47.903 17.617 33.688-21.092 64.263-4.404 94.245 16.689 29.982 29.52 49.197 83.152 30.134 53.631-19.064 48.686-67.57 89.47-95.974 40.785-28.405 84.91-70.927 24.355-146.803-60.556-75.876-99.106-22.8-133.862-33.715z" />
            <path className="left-pattern-mobile-svg" d="M11.09-190.546c-28.022-8.762-56.835-23.376-86.334 3.317-29.498 26.693-48.044 50.076-36.068 80.33 11.976 30.255 60.862 11.41 75.066 38.451 14.204 27.04-17.005 51.582-3.55 75.647 13.455 24.066 23.8 39.49 67.041 24.188 43.24-15.301 39.253-54.236 72.136-77.035 32.882-22.8 68.458-56.932 19.635-117.836-48.823-60.904-79.904-18.3-107.926-27.062z" />
            <path className="left-pattern-mobile-svg" d="M14.12-176.738c-22.917-7.155-46.481-19.09-70.606 2.71-24.125 21.799-39.292 40.895-29.498 65.602 9.795 24.708 49.775 9.319 61.391 31.402C-12.976-54.941-38.5-34.9-27.496-15.245-16.492 4.408-8.031 17.005 27.332 4.508 62.695-7.988 59.435-39.785 86.327-58.405c26.892-18.62 55.987-46.494 16.058-96.232s-65.348-14.945-88.265-22.1z" />
          </g>
        </svg>
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
          <img
            className="h-62 lg:w-full lg:h-96"
            src={bgRightPatternIntroImageDesktop}
          />
        </picture>
        <div className="md:flex items-center relative z-1 w-full">
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:mx-5 md:w-90 lg:w-1/2">
            <div className="max-sm:hidden px-5 mb-10 lg:px-15">
              <hr className="w-40 border-1 border-gray-200" />
            </div>
            <h1 className="intro-title opacity-0 text-[2.30rem] leading-10 md:px-5 md:text-[2.70rem] lg:px-15">
              <span className="block">Humanizing</span>
              <span className="block">your insurance.</span>
            </h1>
            <p className="intro-subtitle px-8 mt-6 text-sm text-gray-300 md:px-5 lg:px-15">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </p>
            <a
              className="intro-link mt-8 border-2 tracking-widest py-2 px-6 md:mx-5 md:text-sm lg:mx-15"
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
