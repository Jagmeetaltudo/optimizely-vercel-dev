import React from 'react';
import TabComponent from './TabComponent';
import { IContentDataFragment, TabsBlockDataFragment, TabsBlockDataFragmentDoc, TabsContentBlockDataFragment } from '../../../../gql/graphql';
import { CmsComponent } from '@remkoj/optimizely-cms-react';


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

export const TabsBlockComponent: CmsComponent<TabsBlockDataFragment> = ({
  data,
}) => {
  const tabs = filterMaybeArray(data?.Tabs) as TabsItems;
  return (
    <section className="flex flex-col items-start self-center mt-20 max-w-full font-light text-zinc-800 w-[1225px] max-md:mt-10">
      <h2 className="text-4xl tracking-wider">{data?.Title}</h2>
      <TabComponent tabData={tabs} />
      
    </section>
  );
};

TabsBlockComponent.displayName = "InfoBlock";
TabsBlockComponent.getDataFragment = () => [
  "TabsBlockData",
  TabsBlockDataFragmentDoc,
];

export default TabsBlockComponent;