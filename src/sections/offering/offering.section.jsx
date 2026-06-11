import snappyImg from "../../assets/icon-snappy-process.svg";
import pricesImg from "../../assets/icon-affordable-prices.svg";
import peopleImg from "../../assets/icon-people-first.svg";
import workImg from "../../assets/bg-pattern-how-we-work-mobile.svg";
import workDesktopImg from '../../assets/bg-pattern-how-we-work-desktop.svg';

function OfferingSection() {
  return (
    <>
      <div className="py-40">
        <div className="flex flex-col items-center justify-center lg:items-start lg:mx-20">
          <hr className="w-40 border-1 border-gray-300" />
          <h2 className="mt-10 mb-20 text-center text-4xl lg:text-5xl">We're different</h2>
        </div>

        <div className="px-10 mb-30 lg:flex lg:px-20">
          <div className="flex flex-col items-center text-center my-10 lg:items-start lg:pr-5">
            <img className="mb-5" src={snappyImg} alt="Snappy Process Icon" />
            <h3 className="my-2 text-2xl">Snappy Process</h3>
            <p className="my-2 karla-400 px-3 lg:text-left lg:px-0">
              Our application process can be completed in minutes, not hours.
              Don't get stuck filing in tedious forms.
            </p>
          </div>
          <div className="flex flex-col items-center text-center my-10 lg:items-start lg:pr-5">
            <img
              className="mb-5"
              src={pricesImg}
              alt="Affordable Prices Icon"
            />
            <h3 className="my-2 text-2xl">Affordable Prices</h3>
            <p className="my-2 karla-400 px-3 lg:text-left lg:px-0">
              We don't want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className="flex flex-col items-center text-center my-10 lg:items-start lg:pr-5">
            <img className="mb-5" src={peopleImg} alt="People First Icon" />
            <h3 className="my-2 text-2xl">People First</h3>
            <p className="my-2 karla-400 px-3 lg:text-left lg:px-0">
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center bg-[#2c2640] mx-5 py-15 lg:mx-20">
          <picture className="lg:hidden h-full absolute right-0 top-0">
            <source media="(max-width: 375px)" srcSet={workImg} />
            <img className="h-full" src={workImg} />
          </picture>
          <picture className="max-lg:hidden h-full absolute right-0 top-0">
            <source media="(max-width: 375px)" srcSet={workDesktopImg} />
            <img className="h-full" src={workDesktopImg} />
          </picture>
          <div className="z-1 flex flex-col items-center lg:flex-row lg:justify-around lg:w-full">
            <h3 className="text-white text-4xl text-center mx-5 mb-5 lg:text-left lg:m-0 lg:w-80">
              Find out more about how we work
            </h3>
            <a
              className="karla-700 mt-8 border-2 tracking-widest py-2 px-4 text-white"
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
