import React from 'react';
import TabComponent from './TabComponent';
import { TabsBlockDataFragment, TabsBlockDataFragmentDoc } from '../../../../gql/graphql';
import { CmsComponent } from '@remkoj/optimizely-cms-react';

export const TabsBlockComponent: CmsComponent<TabsBlockDataFragment> = ({
  data,
}) => {
  return (
    <div id="tabsComponent" className="mx-auto container opti-tab-component">
    <section className="flex flex-col items-start self-center mt-20 max-w-full font-light text-zinc-800 w-[1225px] max-md:mt-10">
      <h2 className="text-4xl tracking-wider">{data?.Title}</h2>
      <TabComponent tabData={data?.Tabs} />
      
    </section>
    </div>
  );
};

TabsBlockComponent.displayName = "InfoBlock";
TabsBlockComponent.getDataFragment = () => [
  "TabsBlockData",
  TabsBlockDataFragmentDoc,
];

export default TabsBlockComponent;