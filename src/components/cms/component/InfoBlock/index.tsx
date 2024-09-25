import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { InfoBlockDataFragmentDoc, type InfoBlockDataFragment } from "@/gql/graphql";

export const InfoBlockComponent : CmsComponent<InfoBlockDataFragment> = ({ data }) => {
return <section className="hero">
<div className="hero-content">
    <h1 className="hero-title">{data.title}</h1>
    <p className="hero-description">{data.descrip}</p>
</div>
</section>

}

InfoBlockComponent.displayName = "InfoBlock"
InfoBlockComponent.getDataFragment = () => ['InfoBlockData', InfoBlockDataFragmentDoc]

export default InfoBlockComponent