import snappyImg from "../../assets/icon-snappy-process.svg";
import pricesImg from "../../assets/icon-affordable-prices.svg";
import peopleImg from "../../assets/icon-people-first.svg";
import workImg from "../../assets/bg-pattern-how-we-work-mobile.svg";
import workDesktopImg from "../../assets/bg-pattern-how-we-work-desktop.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { mm, breakpoints } from "../../animations/matchMedia";

function OfferingSection() {
  useGSAP(() => {
    //DESKTOP ANIMATIONS

    mm.add(breakpoints.isDesktop, () => {
      gsap.from(".offering-title", {
        y: 10,
        opacity: 0,
        scrollTrigger: {
          trigger: ".offering-title-container",
          start: "top center",
          end: "+450px center",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".offering-features-img", {
        scale: 0,
        duration: 0.75,
        ease: "circ.inOut",
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: ".offering-features",
          scrub: 1,
          start: "-150px center",
          end: "150px center",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".offering-features-title, .offering-features-content", {
        y: 10,
        opacity: 0,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: ".offering-features",
          scrub: 1,
          start: "-150px center",
          end: "250px center",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".offering-work-title", {
        y: 10,
        opacity: 0,
        scrollTrigger: {
          trigger: ".offering-work-container",
          start: "top center",
          end: "top 100px",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".offering-work-bg-desktop-pattern", {
        ease: "none",
        drawSVG: "0",
        duration: 2,
        scrollTrigger: {
          trigger: ".offering-work-container",
          start: "top center",
          end: "top 100px",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    //MOBILE ANIMATIONS
    mm.add(breakpoints.isMobile, () => {
      gsap.from(".offering-title", {
        y: 10,
        opacity: 0,
        stagger: 0.75,
        scrollTrigger: {
          trigger: ".offering-title-container",
          start: "-150px center",
          end: "+450px center",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".offering-features-img", {
        scale: 0,
        duration: 0.75,
        ease: "circ.inOut",
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: ".offering-features",
          scrub: 1,
          start: "-150px center",
          end: "450px center",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".offering-features-title, .offering-features-content", {
        y: 10,
        opacity: 0,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: ".offering-features",
          scrub: 1,
          start: "-150px center",
          end: "+450px center",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".offering-work-title", {
        y: 10,
        opacity: 0,
        scrollTrigger: {
          trigger: ".offering-work-container",
          start: "top center",
          end: "top 100px",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".offering-work-bg-pattern", {
        ease: "none",
        drawSVG: "0",
        duration: 2,
        scrollTrigger: {
          trigger: ".offering-work-container",
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  });

  return (
    <>
      <div className="py-40">
        <div className="offering-title-container flex flex-col items-center lg:items-start lg:mx-20">
          <hr className="offering-title w-40 border-1 border-gray-300" />
          <h2 className="offering-title mt-10 mb-20 text-4xl lg:text-5xl">
            We're different
          </h2>
        </div>

        <div className="offering-features px-10 mb-40 lg:flex lg:px-20">
          <div className="flex flex-col items-center text-center my-10 lg:items-start lg:pr-5">
            <img
              className="offering-features-img mb-5"
              src={snappyImg}
              alt="Snappy Process Icon"
            />
            <h3 className="offering-features-title my-2 text-2xl">
              Snappy Process
            </h3>
            <p className="offering-features-content my-2 px-3 lg:text-left lg:px-0">
              Our application process can be completed in minutes, not hours.
              Don't get stuck filing in tedious forms.
            </p>
          </div>
          <div className="flex flex-col items-center text-center my-10 lg:items-start lg:pr-5">
            <img
              className="offering-features-img mb-5"
              src={pricesImg}
              alt="Affordable Prices Icon"
            />
            <h3 className="offering-features-title my-2 text-2xl">
              Affordable Prices
            </h3>
            <p className="offering-features-content my-2 px-3 lg:text-left lg:px-0">
              We don't want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className="flex flex-col items-center text-center my-10 lg:items-start lg:pr-5">
            <img
              className="offering-features-img mb-5"
              src={peopleImg}
              alt="People First Icon"
            />
            <h3 className="offering-features-title my-2 text-2xl">
              People First
            </h3>
            <p className="offering-features-content my-2 px-3 lg:text-left lg:px-0">
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </p>
          </div>
        </div>
        <div className="offering-work-container relative flex flex-col bg-[#2c2640] mx-5 py-15 lg:mx-20">
          <svg
            className="lg:hidden h-full absolute right-0 top-0"
            xmlns="http://www.w3.org/2000/svg"
            width="176"
            height="317"
          >
            <g fill="none" fill-rule="evenodd" stroke="#9E96C6">
              <path
                className="offering-work-bg-pattern"
                d="M229.233-90.334c-50.722-15.88-102.876-42.369-156.271 6.012C19.567-35.94-14.002 6.441 7.676 61.278c21.678 54.836 110.165 20.68 135.875 69.691 25.71 49.01-30.78 93.492-6.426 137.111 24.354 43.62 43.081 71.576 121.35 43.841 78.268-27.734 71.051-98.303 130.57-139.628 59.52-41.324 123.916-103.188 35.542-213.576-88.373-110.388-144.632-33.17-195.354-49.05z"
              />
              <path
                className="offering-work-bg-pattern"
                d="M235.714-64.418c-41.272-12.887-83.71-34.382-127.158 4.879C65.108-20.28 37.793 14.114 55.432 58.614c17.64 44.5 89.642 16.782 110.563 56.554 20.92 39.772-25.047 75.868-5.23 111.265 19.818 35.397 35.056 58.083 98.743 35.577 63.687-22.507 57.815-79.773 106.246-113.308 48.431-33.534 100.83-83.736 28.92-173.316-71.909-89.58-117.687-26.916-158.96-39.804z"
              />
              <path
                className="offering-work-bg-pattern"
                d="M247.526-47.655c-33.452-10.515-67.85-28.052-103.065 3.98-35.216 32.032-57.355 60.091-43.058 96.397 14.297 36.305 72.657 13.692 89.614 46.14 16.956 32.449-20.301 61.898-4.239 90.777 16.063 28.88 28.414 47.388 80.034 29.026 51.62-18.362 46.86-65.084 86.115-92.443 39.255-27.36 81.726-68.318 23.441-141.403-58.285-73.084-95.39-21.96-128.842-32.474z"
              />
              <path
                className="offering-work-bg-pattern"
                d="M259.692-27.494c-27.045-8.434-54.853-22.5-83.323 3.192-28.47 25.692-46.368 48.198-34.81 77.318C153.119 82.136 200.3 64 214.008 90.025c13.708 26.026-16.412 49.647-3.427 72.81 12.986 23.164 22.971 38.01 64.703 23.282 41.732-14.728 37.884-52.203 69.62-74.147 31.734-21.945 66.07-54.797 18.95-113.417-47.12-58.62-77.117-17.614-104.161-26.047z"
              />
              <path
                className="offering-work-bg-pattern"
                d="M262.21-13.586c-22.048-6.9-44.719-18.409-67.929 2.612-23.21 21.02-37.802 39.435-28.379 63.26 9.423 23.826 47.887 8.986 59.063 30.28 11.176 21.294-13.38 40.62-2.793 59.572 10.587 18.952 18.727 31.099 52.75 19.048 34.022-12.05 30.885-42.71 56.757-60.665 25.873-17.955 53.865-44.834 15.45-92.796-38.415-47.962-62.87-14.411-84.919-21.311z"
              />
            </g>
          </svg>
          <svg className="max-lg:hidden h-full absolute right-0 top-0" xmlns="http://www.w3.org/2000/svg" width="434" height="250">
            <g fill="none" fill-rule="evenodd" stroke="#9E96C6">
              <path className="offering-work-bg-desktop-pattern" d="M374.872-183.487c-83.088-26.03-168.523-69.446-255.99 9.854C31.415-94.333-23.575-24.865 11.936 65.016c35.51 89.881 180.463 33.898 222.58 114.23 42.116 80.332-50.424 153.24-10.528 224.736 39.896 71.496 70.573 117.318 198.785 71.859 128.212-45.46 116.391-161.127 213.89-228.861 97.5-67.734 202.988-169.134 58.222-350.07-144.766-180.935-236.925-54.367-320.013-80.397z" />
              <path className="offering-work-bg-desktop-pattern" d="M384.985-142.161c-67.557-21.138-137.022-56.395-208.139 8.002C105.73-69.762 61.02-13.351 89.892 59.638c28.873 72.99 146.729 27.527 180.973 92.762 34.243 65.235-40.998 124.441-8.56 182.5 32.439 58.059 57.381 95.27 161.627 58.354 104.246-36.916 94.634-130.846 173.908-185.85C677.114 152.4 762.883 70.057 645.178-76.874c-117.705-146.93-192.637-44.15-260.193-65.287z" />
              <path className="offering-work-bg-desktop-pattern" d="M404.804-113.49c-54.849-17.232-111.247-45.974-168.987 6.523-57.74 52.496-94.04 98.482-70.598 157.983 23.442 59.5 119.13 22.44 146.932 75.62 27.802 53.179-33.286 101.444-6.95 148.773 26.337 47.33 46.587 77.663 131.224 47.57 84.637-30.094 76.834-106.665 141.196-151.504 64.362-44.84 133.998-111.966 38.434-231.743-95.565-119.778-156.402-35.99-211.25-53.223z" />
              <path className="offering-work-bg-desktop-pattern" d="M424.91-80.123c-44.205-13.836-89.659-36.915-136.194 5.238-46.534 42.153-75.79 79.079-56.898 126.856 18.893 47.777 96.011 18.018 118.418 60.72 22.407 42.7-26.826 81.456-5.6 119.46 21.225 38.003 37.546 62.36 105.758 38.196 68.213-24.164 61.923-85.648 113.796-121.652 51.872-36.005 107.994-89.905 30.975-186.082-77.02-96.177-126.05-28.9-170.255-42.736z" />
              <path className="offering-work-bg-desktop-pattern" d="M430.256-58.56c-36.06-11.317-73.137-30.194-111.097 4.285-37.96 34.478-61.824 64.681-46.413 103.76 15.411 39.079 78.319 14.738 96.597 49.665 18.278 34.928-21.883 66.627-4.57 97.712 17.315 31.085 30.629 51.008 86.271 31.243 55.642-19.765 50.512-70.056 92.826-99.505 42.313-29.45 88.093-73.537 25.267-152.204-62.827-78.668-102.822-23.638-138.881-34.956z" />
              <path className="offering-work-bg-desktop-pattern" d="M440.955-42.498c-29.325-9.164-59.479-24.448-90.35 3.469-30.87 27.916-50.278 52.37-37.745 84.012 12.533 31.641 63.693 11.933 78.557 40.213 14.865 28.28-17.796 53.946-3.715 79.115 14.08 25.169 24.908 41.3 70.16 25.296 45.25-16.003 41.078-56.722 75.49-80.566C567.763 85.196 604.994 49.5 553.9-14.196 502.807-77.89 470.28-33.335 440.955-42.498z" />
            </g>
          </svg>
          <div className="z-1 flex flex-col items-center lg:flex-row lg:justify-around lg:w-full">
            <h3 className="offering-work-title text-white text-4xl text-center mx-5 mb-5 lg:text-left lg:m-0 lg:w-80">
              Find out more about how we work
            </h3>
            <a
              className="mt-8 border-2 tracking-widest py-2 px-4 text-white lg:m-0"
              href="#"
            >
              HOW WE WORK
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferingSection;
