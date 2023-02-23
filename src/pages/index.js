import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Headings from "../components/headings";

const IndexPage = () => {
  const { strapiGlobal, allStrapiMenu } = useStaticQuery(graphql`
    query {
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
      allStrapiMenu {
        nodes {
          id
          title
          cost
          isSpecial
        }
      }
    }
  `);

  const hours = strapiGlobal.openingHours.data.childMarkdownRemark;

  return (
    <Layout hours={hours} contact={strapiGlobal.contact}>
      <Seo title="Home" />
      <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      />
      <main>
        {/* The Specials menu */}
        <div className="container grid justify-center ">
          <h4 className="mt-[5rem] text-center text-3xl font-bold text-neutral-700">
            {strapiGlobal.specialDateRange}
            <p className="mb-2 text-xl text-neutral-500">
              {strapiGlobal.specialTimeRange}
            </p>
          </h4>

          {allStrapiMenu.nodes.map((item, index) => {
            return (
              <>
                {item.isSpecial && (
                  <div className=" m-2 grid grid-cols-8 py-2 tracking-widest hover:font-medium ">
                    <p className="col-span-7 w-[500px] max-sm:w-[220px]">
                      {item.title}
                    </p>
                    <p className="col-span-1 text-end">{item.cost} </p>
                  </div>
                )}
              </>
            );
          })}
        </div>

        {/* The usual menu */}
        <div className="mx-4 grid justify-center">
          <h4 className="mt-[5rem] text-center text-3xl font-bold text-neutral-700">
            {strapiGlobal.festKarteTitle}
            <p className="mb-2 text-xl text-neutral-500 ">
              {strapiGlobal.festKarteSubTitle}
            </p>
          </h4>

          {allStrapiMenu.nodes.map((item, index) => {
            return (
              <>
                {!item.isSpecial && (
                  <div className=" m-2 grid grid-cols-8 py-2 tracking-widest hover:font-medium ">
                    <p className="col-span-7 w-[500px] max-sm:w-[220px]">
                      {item.title}
                    </p>
                    <p className="col-span-1 text-end">{item.cost} </p>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
