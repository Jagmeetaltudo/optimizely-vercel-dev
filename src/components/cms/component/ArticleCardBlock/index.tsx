import CmsImage from "@/components/shared/cms_image";
import { ArticleCardBlockDataFragment, ArticleCardBlockDataFragmentDoc } from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

export const ArticleCardBlockComponent: CmsComponent<
  ArticleCardBlockDataFragment
> = ({ data }) => {
    return(
<article className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
<div className="flex flex-col text-2xl font-light tracking-wide text-cyan-900 max-md:mt-5 max-md:max-w-full">
<CmsImage
          loading="lazy"
          src={data?.Image}
          alt="Inspirational background"
          className="object-contain w-full aspect-[0.77]"
          layout="fill"
        />
         <CmsEditable
                as="h2"
                cmsFieldName="Title"
                className="self-center mt-5"
        ></CmsEditable>
  <div className="flex flex-col flex-1">
      <button className="mt-1 text-sm font-bold tracking-wide uppercase text-teal-950">
        Read More
      </button>
    </div></div>
</article>)
}
ArticleCardBlockComponent.displayName = "ArticleHeroBlock";
ArticleCardBlockComponent.getDataFragment = () => [
  "ArticleHeroBlockData",
  ArticleCardBlockDataFragmentDoc,
];
export default ArticleCardBlockComponent;