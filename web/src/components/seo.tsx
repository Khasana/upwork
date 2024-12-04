import { Helmet, HelmetData } from "react-helmet-async";

type HeadProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export const Head = ({ title = "", description = "" }: HeadProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | Tasks App` : undefined}
      defaultTitle="Tasks App"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
