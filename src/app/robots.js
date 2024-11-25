export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/', // Specify the paths to disallow
      },
    ],
    sitemap: 'https://www.vinjournalen.se/sitemap.xml', // Provide your sitemap URL
  };
}
