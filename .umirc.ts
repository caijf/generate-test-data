import { defineConfig } from 'dumi';

const publicPath = process.env.NODE_ENV === 'production' ? '/generate-test-data/' : '/';
const prodConfig: any = {};

if (process.env.NODE_ENV === 'production') {
  prodConfig.headScripts = [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-69DRVDC8WH',
    },
    {
      content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-69DRVDC8WH');
    `,
    },
  ];
  prodConfig.chunks = ['vendors', 'umi'];
  prodConfig.chainWebpack = function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true,
            },
          },
        },
      },
    });
  };
}

export default defineConfig({
  title: 'generate-test-data',
  history: {
    type: 'hash',
  },
  hash: true,
  publicPath,
  favicon: 'https://www.caijinfeng.com/favicon.ico',
  logo: 'https://www.caijinfeng.com/logo.png',
  outputPath: 'docs-dist',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],

  ...prodConfig,
  // more config: https://d.umijs.org/config
});
