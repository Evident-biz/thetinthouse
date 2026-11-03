# The Tint House website

Static site for The Tint House (Patterson, CA), built with Astro. Layout follows the owner's reference site section by section; see `docs/homepage-blueprint.md`.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live

- `src/data/site.ts`: phone, hours, address, rating, reviews, services, city pages. Edit business details here only.
- `src/pages/`: one file per page. City pages come from `cities` in `site.ts` via `window-tint-[city].astro`.
- `src/pages/blog/*.md`: blog posts (Markdown). New files show up on the blog and homepage automatically.
- `src/assets/stock/`: CC0 placeholder photos. Credits in `src/assets/stock/CREDITS.md`.
- `netlify.toml`: build settings and 301 redirects from the old Wix URLs.

## Quote form

Uses Netlify Forms (free tier) so it works on deploy with no backend: submissions show in the Netlify dashboard and can email the owner (Site settings > Forms > Notifications). Planned upgrade: Supabase + phone admin (see blueprint).

## Before launch (needs owner)

- [ ] Real photos and a short install video to replace stock images (hero frame, about, service cards)
- [ ] Vector or high-res logo (current logo is the 192px favicon from the old site)
- [ ] Confirm film brands and film tiers offered (`site.brands`, automotive page "Film Options")
- [ ] Confirm warranty wording
- [ ] Confirm response window promise (`site.responseWindow`, currently "2 business hours")
- [ ] Public email address, if he wants one shown
- [ ] Confirm services: vinyl/decals, safety film, windshield film, house calls for commercial
- [ ] Review About page story (year opened, details)
- [ ] Review Privacy Policy and Terms
- [ ] Lead notification email in Netlify Forms
- [ ] Point thetinthouse.net DNS to the new host, then update Google Business Profile website link
