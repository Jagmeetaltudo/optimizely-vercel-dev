import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { CTATileBlockDataFragment, CTATileBlockDataFragmentDoc} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";


export const CTATileBlockComponent : CmsComponent<CTATileBlockDataFragment> = ({ data, inEditMode }) => {
  return (
    <div
    >
      {/* <figure>
        <EditableReactImage field={props?.fields?.BackgroundImage} />
      </figure> */}
      <div >
        <div >
        { (data.title || inEditMode) && <CmsEditable as="h2" cmsFieldName="CTATileTitle">{ data.title }</CmsEditable> }
        { (data.description || inEditMode) && <CmsEditable as={RichText} cmsFieldName="CTATileDescription" text={ data.description?.json } /> }
          <div >
           {/*  {Boolean(props.fields.Link1.value.href) && (
              <Button
                variant={props?.fields?.CTAType1?.name}
                label={props?.fields?.Link1}
                buttonClassName={props.fields?.CTAColor1?.name}
              />
            )}

            {Boolean(props.fields.Link2.value.href) && (
              <Button
                variant={props?.fields?.CTAType2?.name}
                label={props?.fields?.Link2}
                buttonClassName={props.fields?.CTAColor2?.name}
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};CTATileBlockComponent.displayName = "CTATileBlock";
CTATileBlockComponent.getDataFragment = () => ['CTATileBlockData', CTATileBlockDataFragmentDoc]
export default CTATileBlockComponent;
