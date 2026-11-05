# SURESHOT BY RAM — Telegram Landing Page

A mobile-first landing page that sends visitors to the **𝐒𝐔𝐑𝐄𝐒𝐇𝐎𝐓 𝐁𝐘 𝐑𝐀𝐌** colour trading Telegram channel (https://t.me/+B1PFt8YHopxiYzg1).

Features: animated logo, a large "Join Telegram" button (opens the Telegram app directly on Android), Copy Link and Open in App buttons, an alternate link, channel highlights and an 18+ responsible-play note.

## Tech
- TanStack Start + React 19, deployed on Netlify
- Plain CSS (`src/landing.css`), Archivo + Inter fonts
- Logo served via Netlify Image CDN

## Run locally
```bash
pnpm install
netlify dev
```

## Changing the Telegram link
Edit the `INVITE` constant at the top of `src/routes/index.tsx`.
