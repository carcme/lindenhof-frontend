import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Headings from "../components/headings";

const AboutPage = () => {
  const { strapiAbout, strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiAbout {
        pageTitle
        heading
        image {
          mime
          localFile {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.3)
            }
          }
        }
        richExtra {
          data {
            richExtra
            childMarkdownRemark {
              html
            }
          }
        }
      }
      strapiGlobal {
        festKarteTitle
        festKarteSubTitle
        specialDateRange
        specialTimeRange
        siteName
        siteDescription
        contact {
          address
          contact {
            email
            mobile
            telephone
          }
        }
        openingHours {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);
  const { pageTitle, heading, richExtra, image } = strapiAbout;
  const hours = strapiGlobal.openingHours.data.childMarkdownRemark;

  const img = getImage(image.localFile);
  const isVideo = image.mime.startsWith("video");
  const alternativeText = `${strapiGlobal.siteName} | ${strapiGlobal.siteDescription}`;

  return (
    <Layout hours={hours} contact={strapiGlobal.contact}>
      <Seo title="About" />
      <Headings title={pageTitle} />
      <div className="prose mx-auto py-8 px-8 tracking-wider text-neutral-700">
        <h2>{heading}</h2>
        <div
          className="prose mx-auto py-8 px-8 tracking-wider text-neutral-500"
          dangerouslySetInnerHTML={{
            __html: richExtra.data.childMarkdownRemark.html,
          }}
        />
      </div>
      {img && (
        <div className="flex justify-center py-8">
          {isVideo ? (
            <p>Video not suported as yet!</p>
          ) : (
            <GatsbyImage image={img} alt={alternativeText} layout="fullWidth" />
          )}
        </div>
      )}
    </Layout>
  );
};

export default AboutPage;
