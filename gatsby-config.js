/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `.`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
  partytownProxiedURLs: [
    `https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GA_MEASUREMENT_ID}`,
  ],
};
