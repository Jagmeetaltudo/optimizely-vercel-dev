import CarouselSlide from "../HeroBannerBlock/CarouselSlide";
import Styles from "./HeroCarousel.module.css";
import Slider, { Settings } from "react-slick";

interface slidesData {
  title: string;
  image: any;
  subtitle: string;
  buttons: any;
}

interface CarouselProps {
  slidesData: slidesData[];
}
const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  cssEase: "linear",
};

const Carousel: React.FC<CarouselProps> = ({ slidesData }) => {
  return (
    <>
      <section className="relative w-full min-h-[560px] max-md:pr-5 max-md:max-w-full">
        <div className={`${Styles.heroBannerSlider}`}>
          <div>
            {slidesData.map((slide, index) => (
              <CarouselSlide
                key={index}
                title={slide.title}
                subtitle={slide.subtitle}
                button={slide.buttons}
                image={slide.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Carousel;
