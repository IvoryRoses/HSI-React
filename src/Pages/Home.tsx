import NavigationBar from "../NavigationBar";
import { CarouselData } from "../data/Constants";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="no-scrollbar">
        <div id="top" className="h-screen flex items-center justify-center">
          <Carousel images={CarouselData} />
        </div>
        <div className="h-screen flex items-center flex-col justify-center bg-gray-100">
          <p className="text-base font-bold text-[#f0c62f]">OUR EXPERTISE</p>
          <p className="text-4xl font-bold">
            Explore our solutions for your business
          </p>
        </div>
        <div className="h-screen flex items-center justify-center bg-white">
          <h2 className="text-3xl font-bold">Third Page</h2>
        </div>
      </div>
    </>
  );
}
