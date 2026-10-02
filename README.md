# KalaKriti Online — Handmade Art & Crafts E-commerce

A full-featured e-commerce storefront for handmade art and crafts (paintings, pottery, jewelry, decor). Built with Next.js 13, TypeScript, and Tailwind CSS + shadcn/ui. Product catalog, detail pages, cart, checkout flow, custom-design requests, my-account pages, and a blog — all client-side with mock data, plus a mock AI "artwork suggestions" flow.

## Features

- **Product catalog** — category browsing (paintings, pottery, jewelry, crafts), product grid, detail pages with dynamic `[slug]` routes
- **Shopping cart** — add/remove items, quantity controls (React Context state)
- **Checkout flow** — multi-step checkout UI
- **Custom design requests** — form to request bespoke artwork
- **My account** — account/orders pages
- **Blog + About pages** — content sections
- **Mock AI suggestions** — `ai/flows/artwork-suggestions.ts` simulates Genkit-style product recommendations (no API key needed; swap in a real Genkit flow when ready)
- **Dark/light theme** — next-themes toggle
- **Responsive** — mobile-first Tailwind layout with full shadcn/ui kit

## Tech Stack

- **Framework:** Next.js 13.5 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui (Radix primitives)
- **State:** React Context API
- **Forms:** React Hook Form + Zod
- **Extras:** Framer Motion-free; Embla carousels, Recharts, Sonner toasts, next-themes

## Quick Start

```bash
npm install --legacy-peer-deps
npm run dev        # http://localhost:3000
npm run build      # static export -> out/
npm run start      # (not needed for static export)
```

Requirements: Node.js 18+.

## Project Structure

```
├── app/
│   ├── page.tsx                 # home
│   ├── products/page.tsx        # catalog
│   ├── product/[slug]/page.tsx  # product detail (client-rendered)
│   ├── cart/page.tsx            # cart
│   ├── checkout/page.tsx        # checkout
│   ├── custom-design/page.tsx   # bespoke requests
│   ├── my-account/page.tsx      # account
│   ├── blog/page.tsx, about/page.tsx
│   └── layout.tsx               # root layout + providers
├── ai/flows/artwork-suggestions.ts  # mock AI recommendation flow
├── components/ui/               # shadcn/ui components
├── lib/data.ts                  # mock catalog data
├── types/                       # TypeScript types
└── next.config.js               # output:'export', images unoptimized
```

## Deploy

Pre-configured for static export (`next.config.js`: `output: 'export'`, `images: { unoptimized: true }`). Build and deploy the `out/` folder to any static host:

```bash
npm run build
# deploy out/ to Cloudflare Pages / Netlify / GitHub Pages
```

No environment variables required. The Genkit/`@google/generative-ai` packages are installed but only the mock flow is used — no keys needed.

## Notes

- Product images hotlink to Pexels (`images.pexels.com`) — self-host them in `public/` for production.
- Cart/checkout are front-end demos (no payment gateway wired).

## License

MIT — free to use and adapt.

---

*Built by [Girish Lade](https://ladestack.in) — explore more open-source tools and products at [ladestack.in](https://ladestack.in).*
