import React from "react";
import { CmsImage } from "@/components/shared/cms_image";
import { ReferenceDataFragment } from "@/gql/graphql";

interface SocialIconProps {
  sicon: ReferenceDataFragment;
}

const SocialIcon: React.FC<SocialIconProps> = ({ sicon }) => {
  return <CmsImage src={sicon} alt="Social Icon" width={24} height={24} />;
};

export default SocialIcon;
