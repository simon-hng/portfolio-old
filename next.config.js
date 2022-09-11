/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};
