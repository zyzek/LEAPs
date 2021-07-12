module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Synthetix SIPs & SCCPs",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "sips",
        path: "./src/sips/",
      },
      __key: "sips",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "sccp",
        path: "./src/sccp/",
      },
      __key: "sccp",
    },
  ],
};
