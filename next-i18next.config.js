module.exports = {
    i18n: {
      defaultLocale: 'ka',
      locales: ['ka','en','ru'],
      localeDetection:false,
      "pages": {
        "*": ["common"]
      }
    },
    react: { useSuspense: false },
    localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

    reloadOnPrerender: process.env.NODE_ENV === 'development',
  }