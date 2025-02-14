import React, { memo } from 'react';

const PWA = () => {
  return (
    <>
      {/* PWA Primary */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0,maximum-scale=5.0" />
      <meta name="theme-color" content="#F3EFE0" />
      {/* Android */}
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
      {/* iOS */}
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/favicon.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Vinjournalen" />

      {/* Microsoft */}
      <meta name="msapplication-TileImage" content="/favicon.png" />
      <meta name="msapplication-TileColor" content="#F3EFE0" />
      <meta name="msapplication-tap-highlight" content="no" />
    </>
  );
};

export default memo(PWA);
