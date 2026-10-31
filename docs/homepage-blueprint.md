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
- Track tap-to-call clicks as conversions (analytics event). Do not use a call-tracking number on the site; it breaks phone number consistency with Google.

## Other pages (Green Valley has these too)

About, Services (one page per service), Reviews, Blog, Contact, Get a Quote, Careers, Privacy, Terms, Cookie Policy. Add for us: CA tint law page, city pages (Modesto, Turlock, Tracy, Manteca, Newman).

## Lead handling (owner: Allan)

Current reality (from owner, Oct 31 2026): leads come mainly from social media and phone calls. Dedicated shop cell phone. Wix forms handle website leads. Stopped GoHighLevel because AI actions/service got too expensive per day. Wants no prices listed: "Call to get a quote or fill out a form."

Plan: zero new monthly tools at launch. No Twilio, no GHL, no SMS registration needed.

Contact options on every page (sticky on mobile):
- Call (tel: link to shop cell)
- Text (sms: link to shop cell, prefilled "Hi! I'd like a quote for my ___")
- Request a quote (form)
- Message on Instagram / Facebook

Quote form fields: name, phone, "What are we tinting?" (car/truck/SUV, home, business), year/make/model (only if vehicle), "How should we reach you?" (call / text), best time (optional), photo (optional).

Form flow:
1. Customer submits. Page says: "Got it. We'll call or text you back within [X] business hours." After-hours version names the next open day.
2. Lead saved in Supabase.
3. Owner alerted by email (Resend) and push notification from the admin app on the shop phone (web push works on iPhone when the admin is added to the home screen).
4. Owner replies from the shop cell like today. Leads tab: New > Contacted > Booked > Lost, with tap-to-call and tap-to-text.
5. "Job done" button opens the shop phone's own Messages app with a prefilled Google review request. Sent from the shop cell, free, no registration.

Later (only if owner wants): missed-call text-back. Hard to do on a regular cell without changing the shop number or texting from a different number; revisit after launch.
