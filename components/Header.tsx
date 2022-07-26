import Head from "next/head";
import React from "react";

interface Props {
  title?: string;
  description?: string;
}

const Header: React.FC<Props> = ({ title, description }: Props) => {
  const defaultTitle = "Baesta Map";
  const defaultDescription =
    "後で書くよー";
  return (
    <Head>
      <title>{title ? title : defaultTitle}</title>
      <meta
        name="description"
        content={description ? description : defaultDescription}
      />
      <link rel="icon" href="/BaestaMap/favicon.ico" />
    </Head>
  );
};

export default Header;