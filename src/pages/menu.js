import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Headings from "../components/headings";
import Menus from "../components/menus";
import MenuTitle from "../components/menuTitle"

export default function IndexPage({ serverData }) {
    const { strapiGlobal } = useStaticQuery(graphql`
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
    }
  `);

    const hours = strapiGlobal.openingHours.data.childMarkdownRemark;
    const { specialDateRange, specialTimeRange, festKarteTitle, festKarteSubTitle } = serverData.global.data.attributes
    return (
        <Layout hours={hours} contact={strapiGlobal.contact}>
            <Seo title="Home" />
            <Headings
                title="Menu Preview"
                description="This page updates on each load"
            />
            <main>
                {/* The Specials menu */}
                <div className="container grid justify-center ">
                    <MenuTitle main={specialDateRange} sub={specialTimeRange} />

                    {serverData.menus.data.map((item) => {
                        return (
                            <>
                                {item.attributes.isSpecial && (
                                    <Menus key={item.id} title={item.attributes.title} cost={item.attributes.cost} />
                                )}
                            </>
                        );
                    })}
                </div>

                {/* The usual menu */}
                <div className="mx-4 grid justify-center">
                    <MenuTitle main={festKarteTitle} sub={festKarteSubTitle} />

                    {serverData.menus.data.map((item) => {
                        return (
                            <>
                                {!item.attributes.isSpecial && (
                                    <Menus key={item.id} title={item.attributes.title} cost={item.attributes.cost} />
                                )}
                            </>
                        );
                    })}
                </div>
            </main>
        </Layout>
    );
};

export async function getServerData() {

    try {
        const menus = await fetch(`https://lindenhof-backend.up.railway.app/api/menus`)
        const global = await fetch(`https://lindenhof-backend.up.railway.app/api/global`)

        if (!menus.ok || !global.ok) {
            throw new Error(`Response failed`)
        }

        return {
            props: {
                menus: await menus.json(),
                global: await global.json(),
            }
        }
    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: {}
        }
    }
}



