import home from "/hp.png";
import saral from "/sar.png";
import { Button } from "@/components/ui/button";
import Item from "../components/Item"
const Home = () => {
  
  return (
    
    <><section className="mx-auto flex max-w-7xl flex-col-reverse items-start gap-12 px-6 py-30 md:flex-row lg:px-8">
      {/* Text Content */}
      <div className="flex max-w-xl flex-col gap-6 text-center md:text-left">
        <img src={saral} alt="brand name" className="max-w-[320px] -mb-18 -ml-4" />

        <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
          Discover high-quality products at unbeatable prices. From everyday
          essentials to trending finds, we bring everything you need right to
          your doorstep.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          <Button
            variant="outline"
            size="lg"
            className=" px-6 transition hover:bg-black hover:text-white"
          >
            Shop Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className=" px-6 transition  hover:text-white hover:bg-black"
          >
            Lear more
          </Button>
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
    <section >
      <Item/>
    </section>
    </>
    
  );
};

export default Home;
