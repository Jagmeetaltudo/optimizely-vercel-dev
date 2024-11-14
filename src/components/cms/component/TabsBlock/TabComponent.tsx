"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import {
  DetailSectionDataFragment,
  IContentDataFragment,
  TabsContentBlockDataFragment,
} from "../../../../gql/graphql";
import CmsImage from "../../../shared/cms_image";
import { RichText } from "@remkoj/optimizely-cms-react/components";


interface TabComponentProps {
  tabData: any;
}

export type TabsItems = Array<
  TabsContentBlockDataFragment & IContentDataFragment
>;

function filterMaybeArray<T>(
  input: Array<T | null> | T | null | undefined
): Array<T> {
  if (!input) return [];
  if (!Array.isArray(input)) return [input];
  return input.filter((x) => x) as Array<T>;
}

interface tabsData {
  title: string;
  tabs: any;
}

export type SectionItems = Array<
  DetailSectionDataFragment & IContentDataFragment
>;

const TabComponent: React.FC<TabComponentProps> = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const tabs = filterMaybeArray(tabData) as TabsItems;
  const sectionData = filterMaybeArray(
    tabs[activeTab]?.SectionContent
  ) as SectionItems;
  return (
    <>
   
      <nav className="flex flex-wrap gap-8 mt-14 text-sm text-center uppercase text-zinc-600 max-md:mt-10">
        {tabs.map((tab, index) => (
          <Tabs
            key={index}
            label={tab?.Title || ""}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </nav>

      {sectionData?.map((item, index) => (
        <>
          <h3 className="tab-content-heading self-stretch py-3.5 mt-10 text-2xl tracking-tight text-zinc-600 max-md:pr-5 max-md:max-w-full">
            {item.Title}
          </h3>
          <section key={index} className="tab-content-detail pb-8 mt-8 w-full bg-blend-normal">
            <div className="flex gap-12  max-md:flex-col">
            {item.Image && <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                 <CmsImage
                  src={item.Image}
                  alt="hero-image"
                  aria-hidden
                  priority
                  width={220}
                  height={220}
                  className="object-contain shrink-0 max-w-full bg-blend-normal aspect-square w-[220px] max-md:mt-8"
                />
              </div>}
              <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                <p className="text-base font-light leading-7 text-zinc-800 max-md:mt-8 max-md:max-w-full">
                  {item.subtitle}
                  <RichText text={item.RichText?.json}/>
                </p>
              </div>
            </div>
          </section>
          
        </>
      ))}
   
    </>
  );
};
export default TabComponent;
