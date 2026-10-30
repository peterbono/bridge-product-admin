# Product admin

A back office (orders, customers, products, reviews) for two fictional shops, built with the
[Bridge design system](https://github.com/peterbono/ai-design-system-demo) from npm. Demo data, generated in the browser.

It is the kind of product repository a team has: the design system arrives as packages (`@bridge-ds/react`,
`@bridge-ds/tokens`), and Bridge explorations for this product (`admin-app` in the design system's
`bridge.config.json`) are `explore/*` branches here, each with a Vercel preview.

```sh
npm install
npm run dev        # http://localhost:5180
npm run build
```

## Bridge

- `bridge connect` was run here: `.mcp.json` (the Bridge MCP server), `.bridge/product.json` (the design system and
  this product's key) and the Bridge section of `CLAUDE.md`.
- The Bridge toolbar is mounted in `src/App.tsx` with one line,
  `<BridgeToolbar ds="peterbono/ai-design-system-demo" product="admin-app" />`. Studio's "Try it in the product" opens
  an exploration's preview with `?bridge=<n>`: **Live product** is production, **This change** is the branch preview.
