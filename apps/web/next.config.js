//@ts-check

const { composePlugins, withNx } = require('@nx/next');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  output: 'standalone',
};

const withVanillaExtract = createVanillaExtractPlugin();

const plugins = [withVanillaExtract, withNx];

module.exports = composePlugins(...plugins)(nextConfig);
