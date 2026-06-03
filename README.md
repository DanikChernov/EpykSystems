# Epyk Systems Website

Production-ready marketing website for **Epyk Systems**, a parent company focused on industrial operations software, workflow automation, inventory/material tracking, computer vision, and practical AI-assisted infrastructure.

Brand tagline:

```text
Built for Real Operations.
```

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Lucide icons

## Brand Assets

Official/cropped logo assets live in:

```text
public/brand/epyk-systems-logo.png
public/brand/epyk-icon.png
public/brand/favicon.png
public/brand/epyk-systems-logo-reference.png
public/brand/epyk-icon.svg
```

Use `epyk-systems-logo.png` for full horizontal logo placement. Use `epyk-icon.png` or `epyk-icon.svg` for compact/icon-only contexts.

If the official logo is replaced later, keep the same file names to avoid code changes. Do not stretch the logo; preserve its aspect ratio.

## Pages

- Home
- Epyk Operations
- Epyk Inventories
- Epyk Vision
- Portfolio
- About
- Contact

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Contact Form Email Delivery

The contact form frontend is implemented with validation and posts to:

```text
/api/contact
```

Cloudflare Email Routing handles receiving email for:

```text
contact@epyk-systems.com
```

Resend handles sending website form submissions from the `/api/contact` route to the contact inbox.

Required Vercel environment variables:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=contact@epyk-systems.com
CONTACT_FROM_EMAIL=Epyk Systems <onboarding@resend.dev>
```

Use `onboarding@resend.dev` for initial testing unless the Resend domain is fully verified for `epyk-systems.com`.

Attachments are currently filename-only in the delivered email until object storage is connected. Future attachment support can use Cloudflare R2, Supabase Storage, or S3.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Add the contact form email environment variables listed above.
5. Add the custom domain:

```text
epyk-systems.com
```

Vercel supports the included Next.js API route without extra configuration.

## Deploy to Cloudflare Pages

Cloudflare Pages can host the static parts of this site directly, but the included `/api/contact` route needs a backend strategy.

Recommended Cloudflare setup:

- Framework preset: Next.js
- Build command:

```bash
npm run build
```

- Output directory:

```text
.next
```

For full Next.js support on Cloudflare, use the current Cloudflare Next.js adapter/OpenNext workflow recommended by Cloudflare for the installed Next.js version.

If you choose static export later:

- The site pages can be exported statically.
- The `/api/contact` route will not work as a static export.
- Replace the contact handler with Cloudflare Pages Functions, Workers, Formspree, or another external endpoint.

Custom domain steps:

1. Add `epyk-systems.com` in Cloudflare Pages custom domains.
2. Point DNS to the Cloudflare Pages project as instructed by Cloudflare.
3. Enable HTTPS.
4. Add any production email/storage environment variables.

Typical DNS will be either a CNAME to the Pages project hostname or the records Cloudflare provides in the Pages custom domain flow.

## Deploy to Netlify

1. Import the repository in Netlify.
2. Use the Next.js build preset.
3. Build command:

```bash
npm run build
```

4. Add the contact form email environment variables listed above.
5. Connect `epyk-systems.com` under domain settings.

## Notes

- The npm override for `postcss` keeps the nested dependency on a patched version.
- No paid APIs are required for the site to build or run locally, but contact form email delivery requires a Resend API key at runtime.
- The contact route returns public-safe messages and does not expose provider errors to users.
- Vercel is the simplest deployment path if you want the included Next.js API route to work without adding a separate Cloudflare Worker or Pages Function.
