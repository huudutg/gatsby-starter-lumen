// @flow strict
import React from "react";
// @ts-ignore
import { graphql } from "gatsby";
import { useSiteMetadata } from "../hooks";
import Info from "../components/Info";
import LayoutInfo from "../components/Layout/LayoutInfo";

type Props = {
    data: {
        mongodbNotduInfos: IInfo;
    };
};

export type IInfo = {
    mongodb_id?: string;
    uuid: string;
    email?: string;
    password?: string;
    name?: string;
    bio?: string;
    avatar?: string;
    hash?: string;
    list: Item[];
};

type Item = {
    name: string;
    url: string;
};

const InfoTemplate = ({ data }: Props) => {
  const { title: siteTitle } = useSiteMetadata();
  const info: IInfo = data.mongodbNotduInfos;
  return (
        <LayoutInfo
            title={`${info.name} - ${siteTitle}`}
            description={info.bio}
            socialImage={""}
        >
            <Info info={info}/>
        </LayoutInfo>
  );
};

export const pageQuery = graphql`
  query MyQuery($uuid: String!) {
    mongodbNotduInfos(uuid: { eq: $uuid }) {
    bio
    email
    name
    avatar
    uuid
    list {
      name
      url
    }
    mongodb_id
    }
  }
`;

export default InfoTemplate;
