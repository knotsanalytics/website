/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  generateBuildId: () => "build",
  axios: {
    baseURL: "/",
  },
  pageExtensions: ["mdx", "tsx"],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};
