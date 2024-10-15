'use client'
import { useState } from "react";
import CarouselSlide from "../HeroBannerBlock/CarouselSlide";
import CarouselIndicator from "./CarouselIndicator";

interface slidesData {
    title: string;
    image: any;
    subtitle: string;
    buttons: any;
  }
  
  interface CarouselProps {
    slidesData: slidesData[];
  }

  
const Carousel : React.FC<CarouselProps> = ({ slidesData }) =>
{
    const [currentSlide, setCurrentSlide] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };
    return (
        <section className="relative w-full  max-md:max-w-full">
        {slidesData.map((slide, index) => (
          <CarouselSlide
            key={index}
            title={slide.title}
            subtitle={slide.subtitle}
            button={slide.buttons }
            image={slide.image}
            isActive={index === currentSlide}
          />
        ))}
        <div className="flex relative items-start mt-96 min-h-[17px] max-md:mt-10">
          {slidesData.map((_, index) => (
            <CarouselIndicator
              key={index}
              isActive={index === currentSlide}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </section>
    )
}
export default Carousel