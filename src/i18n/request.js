const { getRequestConfig } = require('next-intl/server');

module.exports = getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? 'ja';
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
}); 