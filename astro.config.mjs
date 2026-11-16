// @ts-check
import { defineConfig } from 'astro/config'
import node from '@astrojs/node'

// Every page is prerendered to static HTML at build time, except /contact,
// which opts out (`prerender = false`) because it has to handle the form POST.
export default defineConfig({
  site: 'https://diamantverktyg.com',
  adapter: node({ mode: 'standalone' }),

  // Same as the old Express app: listen on all interfaces (0.0.0.0), port 3000.
  // The PORT and HOST environment variables override these at runtime.
  server: {
    host: true,
    port: 3000
  },

  // The pages and components were originally written with global CSS plus
  // shadow DOM. ':where()' scoping adds no specificity, so each selector keeps
  // the specificity it had before and the cascade resolves the same way.
  scopedStyleStrategy: 'where',

  vite: {
    build: {
      // Vite's default target (Safari/iOS 16.4+) lets the CSS minifier rewrite
      // media queries into range syntax such as `(width<=768px)`. Older iPhones
      // can't parse that and would lose the mobile layout. A wider target keeps
      // `(max-width: 768px)`, which the old site served to every browser.
      target: ['chrome87', 'edge88', 'firefox78', 'safari14', 'ios14'],
      cssTarget: ['chrome87', 'edge88', 'firefox78', 'safari14', 'ios14']
    }
  },

  security: {
    // CSRF protection for the contact form stays enabled. Modern browsers pass
    // it through the Sec-Fetch-Site header. Older browsers fall back to the
    // Origin header, which is compared with the request URL. Behind a reverse
    // proxy, that URL is only correct if the proxy's Host / X-Forwarded-Host /
    // X-Forwarded-Proto headers are trusted, so the production domains are
    // listed here. Any other Host falls back to localhost:PORT.
    checkOrigin: true,
    allowedDomains: [
      { hostname: 'diamantverktyg.com' },
      { hostname: 'www.diamantverktyg.com' }
    ]
  }
})
