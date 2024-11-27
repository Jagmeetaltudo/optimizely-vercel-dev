"use client";

import React, {
  useState,
  useEffect,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";

export type TileProps = PropsWithChildren<{
  itemCount: number
}>
export const Tile: FunctionComponent<TileProps> = ({
  itemCount,
  children,
}) => {
  return (
    <div className="outer-padding">
      <div className="mx-auto container">
        <div className="py-[32pt]">
          <div className="flex flex-col my-8">
            <section className="mt-6 max-md:max-w-full">
              <div className="flex flex-wrap">{children}</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
