const withBuilderDevTools = require("@builder.io/dev-tools/next")();

// next.config.js
module.exports = withBuilderDevTools({
//  output: 'export', // Ensures Next.js uses static export mode
//  images: {
//   unoptimized: true, // Disable Next.js image optimization, which requires a server
//  },
//  assetPrefix: './', // Ensures assets are served correctly from GitHub Pages
});
//module.exports = withBuilderDevTools({
//  reactStrictMode: true,
//});
