const {i18n} = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
   reactStrictMode: true,
   webpack: (config) => {
      config.module.rules.push({
         test: /\.svg$/,
         use: ['@svgr/webpack'],
      });
      return config;
   },
   images: {
      domains: ['unsplash.com', 'images.unsplash.com'],
   },
   i18n,
};
