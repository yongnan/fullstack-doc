# Next.js

## page types

* **CSR: Client-side rendering** (uses no initial props)  

  [next doc](https://nextjs.org/docs/basic-features/data-fetching/client-side)

  

  * run: client side

  * Build: page

  * at the **page** level: the data is fetched at runtime, and the content of the page is updated as the data changes. at the **component** level: the data is fetched at the time of the component mount, and the content of the component is updated as the data changes.

     

  best suited

  * page doesn't require SEO indexing
  * don't need to pre-render your data
  * content of pages needs to update frequently.

   

* **SSR: Client-side rendering** (uses getInitialProps or getServerSideProps) : 

  [next doc](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

  * only runs on server-side and never runs on the browser.

  * When request this page directly,  `getServerSideProps` runs at request time

  * When request this page on client-side page transitions through [`next/link`](https://nextjs.org/docs/api-reference/next/link) or [`next/router`](https://nextjs.org/docs/api-reference/next/router), Next.js sends an API request to the server, which runs `getServerSideProps`

    

  when to use

  *  only if you need to render a page whose data must be fetched at request time. (such as `authorization` headers or geo location).

    

* **SSG: Static-site generation** (uses getStaticProps) :

  *  pre-render this page at build time

  

  when to use

  - The data required to render the page is available at build time ahead of a user’s request
  - The data comes from a headless CMS
  - The data can be publicly cached (not user-specific)
  - The page must be pre-rendered (for SEO) and be very fast — `getStaticProps` generates `HTML` and `JSON` files, both of which can be cached by a CDN for performance

  

  when does 'getStaticProps run'

  - `getStaticProps` always runs during `next build`
  - `getStaticProps` runs in the background when using `revalidate`
  - `getStaticProps` runs on-demand in the background when using [`unstable_revalidate`](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation-beta)

  

* **SSG + ISR: incremental static regeneration**  (uses revalidate in getStaticProps)

  [next doc](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)

   

* Mixed (**SSG + client**) : 

  * data fetch at build time
  * Additional data fetch on client side( ex. loadMore)