// const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
const siteUrl = "http://localhost:3000";

module.exports = {
  siteUrl,
  exclude: [
    "/about",
    "/contact",
    "/error/error",
    "/privacy",
    "/terms",
    "/about",
  ],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: [
          "/about",
          "/contact",
          "/error/error",
          "/privacy",
          "/terms",
          "/server-sitemap.xml",
        ],
      },
      { userAgent: "*", allow: "/" },
    ],
    // additionalSitemaps: [
    //   `${siteUrl}sitemap.xml`,
    //   `${siteUrl}server-sitemap.xml`,
    // ],
  },
};
