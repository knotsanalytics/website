const withMdxEnhanced = require("next-mdx-enhanced");
const rehypePrism = require("@mapbox/rehype-prism");

module.exports = {
  target: "experimental-serverless-trace",
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  axios: {
    baseURL: "/",
  },
  pageExtensions: ["mdx", "tsx"],
  webpack: (config, { buildId, dev, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
};
