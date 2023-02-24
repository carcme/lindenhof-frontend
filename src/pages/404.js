import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Error = () => {
  const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal {
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

  return (
    <Layout hours={hours} contact={strapiGlobal.contact}>
      <Seo title="Error" />
      <main className="container grid justify-center ">
        <h4 className="mt-[5rem] mb-2 text-center text-3xl font-bold text-neutral-700">
          404
        </h4>
        <p className="text-xl tracking-widest text-neutral-500">
          page not found
        </p>
      </main>
    </Layout>
  );
};

export default Error;
