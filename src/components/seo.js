import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title: pageName = {} }) => {
  const { strapiGlobal, site } = useStaticQuery(graphql`
    query {
      strapiGlobal {
        siteName
        siteDescription
        favicon {
          localFile {
            url
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          image
          siteKeywords
          twitterUsername
          language
          siteUrl
        }
      }
    }
  `);

  const {
    siteName: siteTitle,
    siteDescription: siteDesc,
    favicon,
  } = strapiGlobal;

  const { siteKeywords, siteUrl, image, twitterUsername, language } =
    site.siteMetadata;

  return (
    <Helmet
      title={`${pageName} | ${siteTitle}`}
      link={[
        {
          rel: "icon",
          href: favicon.localFile.url,
        },
      ]}
    >
      <meta name="description" content={siteDesc} />
      <meta name="image" content={image} />
      {/* Facebook Card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:keywords" content={siteKeywords || ``} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default Seo;
