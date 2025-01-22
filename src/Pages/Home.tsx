import NavigationBar from "../NavigationBar";
import { CarouselData } from "../data/constants";
import { Carousel } from "../data/Carousel";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="no-scrollbar">
        <div id="top" className="h-screen flex items-center justify-center">
          <Carousel images={CarouselData} />
        </div>
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <h2 className="text-3xl font-bold">Second Page</h2>
        </div>
      </div>
    </>
  );
}
