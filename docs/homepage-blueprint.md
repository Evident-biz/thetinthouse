# The Tint House: Homepage Blueprint

Owner's request: copy the structure of https://www.greenvalleytint.com/ (sections, containers, content types) and fill it with The Tint House's own content.

Rules:
- Copy the layout and the kinds of content only. Do not copy Green Valley's text, photos, logo, colors, or its hidden tracker (`simpleteddybear.com`).
- Use The Tint House's own brand colors. Green Valley uses green #0E7E4D with orange.
- Green Valley is built on WordPress + Elementor and its quote form runs on GoHighLevel (LeadConnector). We are building custom, so match how it looks and works, not those tools.

## Section map (Green Valley, top to bottom, desktop)

| # | Green Valley section | What it contains | Tint House version | Content needed from owner |
|---|---|---|---|---|
| 1 | Top bar (dark green) | Email, phone, YouTube handle | Phone, email, Instagram @thetinthouse_209, address | Email to show |
| 2 | Header | Logo, nav (Home, About Us, Services dropdown, Reviews, Blogs, Contact Us), orange "Request a Quote" button | Same nav. Services dropdown: Automotive, Residential, Commercial (+ PPF / ceramic coating / vinyl only if offered) | Logo files, final service list |
| 3 | Hero (green band) | Left: animated headline "Get A Quote Today" + quote form (first, last, phone, email, service type, message, SMS consent). Right: YouTube video in rounded white frame. Mobile: intro paragraph above form | Same layout. Upgrade: add a real headline ("Window tint in Patterson, CA"), "5.0★ 230+ Google reviews", shorter form (name, phone, service, optional photo). Right side: Tint House install video | 15-30s video, which phone gets leads |
| 4 | Reviews | "What Our Clients Are Saying" + Trustindex Google widget (4.9, 2,358 reviews, carousel with names and dates) | Same: live Google reviews carousel | Google Business Profile manager access |
| 5 | Financing | "Now Offering" + Affirm banner + full Affirm disclosure | Same, but disclosure as a link or collapsed text | Affirm merchant details |
| 6 | Services | Animated headline + flip-box carousel, 8 cards (front: title, back: blurb + Read More) | Same flip-box carousel. No prices (owner decision): card back ends with "Call for a free quote" tap-to-call | Film brands |
| 7 | About Us | Image + mission text + "Our Commitment to Excellence" (Since 1983) + "Empowering Our Teams" icon boxes | Garage-to-shop story, owner + crew photo, crew first names | Story, year opened, team photo |
| 8 | CTA band | "Transform Your Space..." text + button + image | Same, with real Tint House photo | Photos |
| 9 | Benefits | "Enhance Aesthetics & Value" + info circle: Energy Efficiency, UV Protection, Privacy & Security, Expert Installation | Same 4 benefits; add CA tint law note (front side windows 70%) | None |
| 10 | Awards | "Celebrating Success" flip boxes (Ricky Miller, World's Best Architectural Window Film Tinter) | Best of 209 2024 + 2025 badges, any certifications | Certificates, badges |
| 11 | Brands (black band) | Logo carousel, 13 logos | Film brand logos actually used (site currently shows Geoshield, Hitek, 3M, etc.) | Confirm brands |
| 12 | Blog | Latest 3 posts | 3 launch posts: CA tint law, ceramic vs carbon, home window film in the Central Valley heat | Approve topics |
| 13 | Footer | Logo, Quick Links, Our Services, Contact (address, phone, email), socials, Affirm disclosure, Privacy / Terms / Cookie links | Same, plus hours, service-area towns, CSLB license # if applicable | Hours, license # |

## Upgrades that fit inside the same sections (owner won't see them as changes)

1. A headline in the hero that says what and where (Green Valley's hero has none).
2. Review count and Best of 209 in the first screen.
3. Shorter quote form plus text-a-photo option.
4. Sticky tap-to-call bar on mobile ("Call for a free quote").
5. Real photos only, no stock (Green Valley repeats one stock photo twice).
6. Fast custom build instead of Elementor; body text 16px+, no 13px text.
7. Phone-first admin (Supabase) for photos, hours, announcement banner.

## Owner decisions

- No published prices. Every service and CTA drives to a phone call. No price-based quote builder; the shade preview (if built) shows looks and CA legality only.
- Recommended: missed-call text-back (GHL) so calls missed during installs get an instant text reply.
- Track tap-to-call clicks as conversions (analytics event). Do not use a call-tracking number on the site; it breaks phone number consistency with Google.

## Other pages (Green Valley has these too)

About, Services (one page per service), Reviews, Blog, Contact, Get a Quote, Careers, Privacy, Terms, Cookie Policy. Add for us: CA tint law page, city pages (Modesto, Turlock, Tracy, Manteca, Newman).

## Quote / callback request (hero form + Get a Quote page)

Owner uses GoHighLevel (GHL). All leads, texting, and follow-up run through GHL. No Twilio. Supabase is only for the site admin (photos, hours, banner).

Fields: name, phone, "What are we tinting?" (car/truck/SUV, home, business), year/make/model (only if vehicle), "How should we reach you?" (call me / text me a quote), best time (optional), photo (optional), SMS consent checkbox.

Form delivery: custom-styled form on our site posts to a GHL workflow Inbound Webhook (or GHL API v2 contact create via private integration token). Fallback: embed the GHL form (this is what Green Valley does), styled as close as possible.

GHL workflows to set up:
1. Form submitted: create/update contact, tag "website lead", create opportunity in pipeline (New > Contacted > Quoted > Booked > Won/Lost).
2. Instant confirmation text to customer: "Got it. We'll call or text you back within [X] business hours." After-hours version names the next open day.
3. Internal notification to owner (text + LeadConnector app push).
4. Reminder to owner if opportunity still "New" after [X] business hours.
5. Missed call text-back (requires business number on LC Phone or forwarded through it).
6. Quote follow-up: if "Quoted" and not booked after 2 days, one friendly follow-up text.
7. Review request: when moved to "Won", text a Google review link (biggest long-term win).

Site also uses: GHL text-us / chat widget (optional), GHL reviews widget or a Google reviews feed.

Ask owner: sub-account admin access for us, is the shop number on LC Phone, A2P 10DLC status, who set up GHL (agency?), existing workflows to keep.

## GHL status (as of Oct 31, 2026)

- Owner set up GHL himself. No existing automations or texting.
- Access: owner will add us as an admin user (preferred over sharing his login).
- Phone: unknown. Check Settings > Phone Numbers in the sub-account. Decide port vs forward once we know what the shop number is (carrier line, VoIP, or personal cell).
- A2P 10DLC: not registered. Needs legal business name + EIN exactly as on IRS records, business address, website with privacy policy, SMS terms, and opt-in language on the form. Start as soon as a GHL number exists.
