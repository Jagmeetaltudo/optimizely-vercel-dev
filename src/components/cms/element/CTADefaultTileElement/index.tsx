import { CmsComponent } from "@remkoj/optimizely-cms-react";
import Styles from "./CTADefault.module.scss";
import {
  ButtonBlockPropertyDataFragment,
  CTADefaultTileDataFragment,
  CTADefaultTileDataFragmentDoc,
} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import ButtonBlock from "@/components/component/block/button_block";
import button from "@/components/shared/button";

const CTADefaultTile: CmsComponent<CTADefaultTileDataFragment> = ({
  data: { Title, Description, Image, Link },
  inEditMode,
}) => {
  const buttonClasses: string[] = [];

  return (
    <div className={`${Styles.ctaTileDefault} 'ctaTile-without-image'`}>
      <figure>
        {(Image || inEditMode) && (
          <CmsEditable
            as={Image}
            cmsFieldName="CTATileImage"
            src={Image}
            alt={""}
            width={48}
            height={48}
          />
        )}
      </figure>
      <div className={Styles.ctaTileContentWrapper}>
        <div className={Styles.ctaTileContent}>
          {(Title || inEditMode) && (
            <CmsEditable as="h2" cmsFieldName="CTATileTitle">
              {Title}
            </CmsEditable>
          )}
          {(Description || inEditMode) && (
            <CmsEditable as="p" cmsFieldName="CTATileDescription">
              {Title}
            </CmsEditable>
          )}
          <div className={Styles.ctaTilesCTAs}>
            {
              <CmsEditable
                as={ButtonBlock}
                cmsFieldName="CTATileButton"
                contentLink={{ key: null }}
                data={{
                  ...button,
                  __typename: undefined, // Remove data type, so only data fields will be matched
                  " $fragmentName": undefined, // Remove fragment source, so only data fields will be matched
                  className:
                    `${
                      (
                        button as
                          | ButtonBlockPropertyDataFragment
                          | undefined
                          | null
                      )?.className ?? ""
                    } ${buttonClasses.join(" ")}`.trim() || undefined, // Apply additional classes
                }}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};
CTADefaultTile.getDataFragment = () => ['CTADefaultTileData', CTADefaultTileDataFragmentDoc]

export default CTADefaultTile;
