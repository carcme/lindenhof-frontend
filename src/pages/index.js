import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Headings from "../components/headings";
import Menus from "../components/menus";
import MenuTitle from "../components/menuTitle"

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
            facebook
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
          <MenuTitle main={strapiGlobal.specialDateRange} sub={strapiGlobal.specialTimeRange} />

          {allStrapiMenu.nodes.map((item, index) => {
            return (
              <>
                {item.isSpecial && (
                  <Menus title={item.title} cost={item.cost} />
                )}
              </>
            );
          })}
        </div>

        {/* The usual menu */}
        <div className="mx-4 grid justify-center">
          <MenuTitle main={strapiGlobal.festKarteTitle} sub={strapiGlobal.festKarteSubTitle} />

          {allStrapiMenu.nodes.map((item, index) => {
            return (
              <>
                {!item.isSpecial && (
                  <Menus title={item.title} cost={item.cost} />
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
