import { useState, useEffect } from "react";

interface Image {
  id: number;
  src: string;
  text: string;
}

interface CarouselProps {
  images: Image[];
  interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div id="top" className="relative h-screen w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 w-full h-screen flex items-center justify-center"
          >
            <img src={image.src} className="w-full h-full object-cover" />
            <p className="flex absolute text-white">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
