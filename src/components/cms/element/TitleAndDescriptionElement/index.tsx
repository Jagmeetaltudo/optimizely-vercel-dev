import { TitleAndDescriptionElementDataFragment, TitleAndDescriptionElementDataFragmentDoc } from "@/gql/graphql"
import { CmsComponent } from "@remkoj/optimizely-cms-react"
import { RichText } from "@remkoj/optimizely-cms-react/components"
import { getServerContext } from "@remkoj/optimizely-cms-react/rsc"

export const TitleAndDescriptionElement: CmsComponent<TitleAndDescriptionElementDataFragment> = async ({ data, contentLink: { locale } }) => {
    const { factory } = getServerContext()
    return (
        <>
            <h3 className="my-0 mt-[16px]">{data?.TestTitle ?? ''}</h3>
            {data?.TestDescription && <RichText factory={factory} text={data?.TestDescription?.json} />}
        </>
    )
}
TitleAndDescriptionElement.getDataFragment = () => ['TitleAndDescriptionElementData', TitleAndDescriptionElementDataFragmentDoc]

export default TitleAndDescriptionElement