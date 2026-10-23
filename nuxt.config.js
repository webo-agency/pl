// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ["github:webo-agency/www#main"],
  site:{
    url: 'https://webo.pl',
  },
  sitemap: {
    exclude: [
      '/static-test', '/static-test/**',
      '/projektowanie-ux-ui', '/projektowanie-ux-ui/**',
      '/realizacje/eurostal', '/realizacje/eurostal/**',
      '/realizacje/deltahr', '/realizacje/deltahr/**',
      '/realizacje/isw', '/realizacje/isw/**',
      '/realizacje/feeby', '/realizacje/feeby/**',
      '/realizacje/proton', '/realizacje/proton/**',
      '/realizacje/caffewasyl', '/realizacje/caffewasyl/**',
      '/realizacje/przemijanie', '/realizacje/przemijanie/**',
      '/realizacje/wallsociety', '/realizacje/wallsociety/**',
    ],
  },
  routeRules: {
    '/projektowanie-ux-ui': { redirect: { to: '/uslugi/projektowanie-ux-ui/', statusCode: 301 } },
    '/projektowanie-ux-ui/': { redirect: { to: '/uslugi/projektowanie-ux-ui/', statusCode: 301 } },
    '/realizacje/eurostal': { redirect: { to: '/realizacje/eurostal-konfigurator/', statusCode: 301 } },
    '/realizacje/eurostal/': { redirect: { to: '/realizacje/eurostal-konfigurator/', statusCode: 301 } },
  },
});
