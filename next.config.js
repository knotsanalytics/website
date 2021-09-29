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
