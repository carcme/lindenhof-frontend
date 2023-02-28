require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Lindenhof Pätz`,
    description: `Nur das beste Restaurant in Pätz`,
    language: "de",
    siteKeywords: "hausgemachte deutsche küche",
    image: "lindenhof-fb-front.jpg",
    facebookUsername: "LindenhofPaetz",
    twitterUsername: "@hammer3",
    author: `@hammer3`,
    siteUrl: `https://patz.gatsbyjs.io/`,
    siteName: `Lindenhof Pätz`,
    developerName: `hammer3`,
    developerUrl: `https://hammer3.de`,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    'gatsby-plugin-apollo',
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "menu",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                image: "*",
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
};
