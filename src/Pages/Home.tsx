import NavigationBar from "../NavigationBar";
import { CarouselData } from "../data/CarouselData";
import { Carousel } from "../components/Carousel";
import { HomeCards } from "../constants/HomeCards";
import Business from "../assets/business-solutions.jpg";

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
          <div className="flex item-center gap-8">
            <div className="bg-violet-300 h-96 w-96">
              <img src={Business} className="object-center object-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {HomeCards.map((card) => (
                <div className={card.color}>
                  <div>{card.img}</div>
                  <div>
                    <p>{card.header}</p>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
              <div className="col-span-2 flex item-center justify-center bg-pink-300">
                <p>
                  Let your business swiftly adapt to the ever-changing market
                  forces through our viable digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center bg-white">
          <h2 className="text-3xl font-bold">Third Page</h2>
        </div>
      </div>
    </>
  );
}
