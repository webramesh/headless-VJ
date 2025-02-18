import path from 'path';
import { fileURLToPath } from 'url';
import withPWA from 'next-pwa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: 'public',
  disable: false,

  register: true,
  skipWaiting: true,
  //   reactStrictMode: true,
})({
  trailingSlash: true,
  staticPageGenerationTimeout: 360,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vinjournalen.se',
      },
    ],
  },
  async redirects() {
    return [
      //lander
      {
        source: '/vin-atlas',
        destination: '/lander',
        permanent: true,
      },
      //producenter
      {
        source: '/vin-producenter',
        destination: '/producenter',
        permanent: true,
      },
      //regioner
      {
        source: '/vin-regioner',
        destination: '/regioner',
        permanent: true,
      },
      //ordlista
      {
        source: '/ordlista-kategori',
        destination: '/ordlista',
        permanent: true,
      },
      {
        source: '/ordlista-kategori/:slug',
        destination: '/ordlista/:slug',
        permanent: true,
      },
      //produktTyper
      {
        source: '/produkt-typer/vin/:slug',
        destination: '/produkt-typer/:slug',
        permanent: true,
      },
      //produktLand
      {
        source: '/produkt-land/:country/:region',
        destination: '/produkt-land/:region',
        permanent: true,
      },
      {
        source: '/produkt-land/:country/:region/:subregion',
        destination: '/produkt-land/:subregion',
        permanent: true,
      },
      {
        source: '/produkt-land/:country/:region/:subregion/:wine',
        destination: '/produkt-land/:wine',
        permanent: true,
      },
      //drycker
      {
        source: '/drycker/:type/nya-zeland',
        destination: '/drycker/:type/nya-zeeland/',
        permanent: true,
      },
    ];
  },
  // experimental: {
  //   // Enable app directory features
  //   appDir: true,
  // },
});

export default nextConfig;
