# Self-hosting

Live at **https://events.mycodedojo.com**, self-hosted on Michael's homelab (moved off Netlify/Vercel in October 2026).

It runs as a container in the `portfolio-projects` Docker Compose stack on the homelab (`~/portfolio-projects`, visible in Portainer), behind Caddy.

**Redeploy after pushing to `main`:**

```bash
ssh mcooper@192.168.68.75 '~/portfolio-projects/deploy.sh events'
```

**Run locally:**

```bash
docker build -t events .
docker run -p 3000:3000 events
```

## Configuration

- **Database:** self-hosted MongoDB, set with `MONGODB_URI` (default `mongodb://portfolio-mongo:27017/nextEvents`). Events now live in the `events` collection (seeded from the old Firebase Realtime Database), and comments/newsletter sign-ups are stored there too.
- If MongoDB is unreachable (for example during `next build`), pages fall back to `dummy-data.js`; ISR swaps in the database data at runtime.
- `pages/api/events.js` serves all events to the client-side filter page.
- Built on Debian (`node:14-bullseye-slim`) because `sharp` segfaults on Alpine with Next 10.
