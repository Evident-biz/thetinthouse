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

Uses Netlify Forms (free tier) so it works on deploy with no backend: submissions show in the Netlify dashboard and can email the owner (Site settings > Forms > Notifications).

## Updating content

No CMS or database, on purpose. The owner texts changes (photos, hours, promos, logos) to Evident; edit the files, rebuild, redeploy. Photos go in `src/assets/stock/` (or a new `src/assets/work/` folder), logos in `public/brands/`, hours and text in `src/data/site.ts`.

## Before launch (needs owner)

- [ ] Real photos and a short install video to replace stock images (hero frame, about, service cards)
- [x] Logo (wordmark received)
- [ ] Brand and partner logo files (owner will send; drop in `public/brands/`, set `logo` in `site.ts`) and confirm film tiers on automotive page
- [x] Warranty: lifetime against fading, peeling, bubbling, adhesive failure
- [x] Response promise: no timed promise ("as soon as we can")
- [ ] Public email address, if he wants one shown
- [ ] Confirm safety film, windshield film, house calls for commercial (chrome deletes + accent wraps added, no full color change)
- [ ] Owner to edit About story (draft in place)
- [ ] Review Privacy Policy and Terms
- [ ] Lead notification email in Netlify Forms
- [ ] Point thetinthouse.net DNS to the new host, then update Google Business Profile website link
