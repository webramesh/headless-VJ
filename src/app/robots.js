export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/'],
      },
    ],
    sitemap: 'https://vinjournalen.se/sitemap.xml',
  };
}
