import CmsImage from '@/components/shared/cms_image';
import { linkDataToUrl } from '@/components/shared/cms_link';
import { CTAButtonBlockDataFragment, IContentDataFragment } from '@/gql/graphql';
import React from 'react';
import CTAButtonBlock from '../CTAButtonBlock';

interface CarouselSlideProps {
  title: string;
  subtitle: string;
  button: any;
  image: any;
  isActive: boolean;
}

export type TileItems = Array<
  CTAButtonBlockDataFragment & IContentDataFragment
>;

function filterMaybeArray<T>(
  input: Array<T | null> | T | null | undefined
): Array<T> {
  if (!input) return [];
  if (!Array.isArray(input)) return [input];
  return input.filter((x) => x) as Array<T>;
}
interface ButtonData {
  text: string;
  url: any;
  className: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  title,
  subtitle,
  button,
  image,
  isActive,
}) => {
  const utilityItems = filterMaybeArray(button) as TileItems;
  const buttonData: ButtonData[] = utilityItems.map((item) => ({
    text: item.Text || "",
    url: item.Link ? linkDataToUrl(item.Link) : undefined,
    className: item.ClassName || "",
  }));
  return (
    <div
      className={`flex relative flex-col items-start px-20 pt-14 pb-5 w-full min-h-[700px] max-md:px-5 max-md:max-w-full transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-0 absolute inset-0'
      }`}
    >
       <CmsImage
                  loading="lazy"
                  src={image}
                  alt="Inspirational background"
                  className="object-cover absolute inset-0 size-full"
                  layout="fill"
                />
      <div className="relative px-5 pt-5 pb-16 max-w-full bg-white bg-opacity-80 w-[604px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <h2 className="relative text-5xl text-teal-950 max-md:mt-10 max-md:text-4xl">
              {title}
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <p className="relative mt-4 text-base font-light text-stone-500 max-md:mt-10">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      {buttonData.map((button, index) => (
          <CTAButtonBlock key={index} text={button.text} url={button.url} className={button.className} />
        ))}
    </div>
  );
};

export default CarouselSlide;