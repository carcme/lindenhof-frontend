require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Lindenhof Pätz`,
    description: `Nur das beste Restaurant in Pätz`,
    language: "de",
    keywords: "hausgemachte deutsche küche",
    image:
      "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/306154363_647895356671183_4258545306857239621_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QAhtaoTdopMAX8Lq-Pv&_nc_ht=scontent-fra3-1.xx&oh=00_AfAX6Hyz77RfLTM0QJJ2r_cgqbHsAXP3ux4-BFnMm4I1Rw&oe=63FBBD15",
    facebookUsername: "LindenhofPaetz",
    author: `@hammer3`,
    siteUrl: `https://example.com/`,
    siteName: `Lindenhof Pätz`,
    developerName: `hammer3`,
    developerUrl: `https://hammer3.de`,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
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
