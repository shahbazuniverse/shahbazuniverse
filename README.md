# 🦅 SHAHBAZ Univers

<p align="center">
  <img src="public/images/shahbaz-banner.png" alt="SHAHBAZ Univers Banner" width="100%" />
</p>

**SHAHBAZ Univers** is a universal digital platform built with **Next.js (Pages Router)** and **Tailwind CSS**, featuring a golden royal theme, sticky navbar, and immersive wallpaper background used across all pages.

## Features
- Royal golden theme with 3D-like wallpaper on every page
- Sticky Navbar with Royal Hawk emblem + “SHAHBAZ Univers” gradient text
- Fully responsive design
- 8 routes: Home, Login, Dashboard, Blog, Store, About, Gallery, Contact
- Ready for Vercel or Firebase Hosting

## Getting Started
```bash
npm install
npm run dev
```

## Firebase
- Create a Firebase project and enable Email/Password auth.
- Set environment variables on Vercel:
  - NEXT_PUBLIC_FIREBASE_API_KEY
  - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  - NEXT_PUBLIC_FIREBASE_PROJECT_ID
  - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
  - NEXT_PUBLIC_FIREBASE_APP_ID

## Contact API
This project includes `pages/api/contact.js` which uses nodemailer. Set SMTP env vars on Vercel:
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_RECEIVER

MIT © 2025 SHAHBAZ Univers
