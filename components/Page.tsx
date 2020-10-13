import React from "react";
import { config } from "../config/config";
import PageHead from "../components/PageHead";
import Header from "../components/Header";

type Props = {
  title?: string;
  description?: string;
  path?: any;
  children?: any;
};

const Page = (props: Props) => {
  const { title, description, path, children } = props;

  return (
    <>
      <PageHead title={title} description={description} path={path} />

      <Header title={config.appName} />

      <main>{children}</main>
    </>
  );
};

export default Page;
