//@ts-check

const { composePlugins, withNx } = require('@nx/next');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const { join } = require('node:path');

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
  outputFileTracingRoot: join(__dirname, '../../'),
};

const withVanillaExtract = createVanillaExtractPlugin();

const plugins = [withVanillaExtract, withNx];

module.exports = composePlugins(...plugins)(nextConfig);
