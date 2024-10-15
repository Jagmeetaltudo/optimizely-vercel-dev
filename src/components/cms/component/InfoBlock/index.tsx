import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  InfoBlockDataFragmentDoc,
  type InfoBlockDataFragment,
} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";

export const InfoBlockComponent: CmsComponent<InfoBlockDataFragment> = ({
  data,
}) => {
  return (
    <div className="outer-padding">
      <div className="mx-auto container">
        <div className="py-[32pt]">
    <section className="hero">
      <div className="hero-content">
        <CmsEditable
          as="h1"
          cmsFieldName="InfoBlockTitle"
          className="hero-title"
        ></CmsEditable>
        <CmsEditable
          as={RichText}
          cmsFieldName="InfoBlockDescription"
          text={data.descrip?.json}
          className="hero-description"
        />
      </div>
    </section>
    </div>
    </div>
    </div>
  );
};

InfoBlockComponent.displayName = "InfoBlock";
InfoBlockComponent.getDataFragment = () => [
  "InfoBlockData",
  InfoBlockDataFragmentDoc,
];

export default InfoBlockComponent;
