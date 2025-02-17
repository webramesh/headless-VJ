import Script from 'next/script';

const CookieInfo = () => {
  return (
    <Script
      type="text/javascript"
      id="cookieinfo"
      src="https://cookieinfoscript.com/js/cookieinfo.min.js"
      data-font-family="inherit"
      data-text-align="left"
      data-fg="white"
      data-bg="rgb(17 24 39 / 0.95)"
      data-message="För att kunna ge dig bästa möjliga upplevelse och förstå hur vi ska förbättra tjänsten använder vi kakor."
      data-close-text="Acceptera cookies"
      data-divlinkbg="#EB7273"
      data-divlink="white"
      data-linkmsg="Läs vår integritetspolicy"
      data-moreinfo="http://www.vinjournalen.se/integritetspolicy/"
    />
  );
};

export default CookieInfo;
