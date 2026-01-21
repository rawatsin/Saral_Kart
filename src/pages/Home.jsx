import home from "/hp.png";
import saral from "/sar.png";
import { Button } from "@/components/ui/button";
import Item from "../components/Item";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col-reverse items-start gap-12 px-6 py-30 md:flex-row lg:px-8">
        {/* Text Content */}
        <div className="flex max-w-xl flex-col gap-6 text-center md:text-left">
          <img
            src={saral}
            alt="brand name"
            className="max-w-[320px] -mb-18 -ml-4"
          />

          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            Discover high-quality products at unbeatable prices. From everyday
            essentials to trending finds, we bring everything you need right to
            your doorstep.
          </p>

          <div className="flex justify-center gap-4 md:justify-start">
              <Link to={"/product"}>
              <Button
                variant="outline"
                size="lg"
                className=" cursor-pointer px-8 py-6 text-md font-semibold border-slate-200 dark:border-slate-800 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Shop Now
              </Button>
            </Link>

            {/* Learn More Button - Hover Red */}
            <Link to={"/about"}>
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer px-8 py-6 text-md font-semibold border-slate-200 dark:border-slate-800 transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-lg hover:shadow-red-500/30"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex w-full max-w-lg justify-center">
          <img
            src={home}
            alt="Home illustration"
            className="w-full object-contain -mr-40"
          />
        </div>
      </section>
      <section>
        <Item />
      </section>
    </>
  );
};

export default Home;
