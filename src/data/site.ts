// Single source of truth for business details. Update here, not in pages.

export const site = {
  name: 'The Tint House',
  tagline: 'Window Film Specialist',
  url: 'https://www.thetinthouse.net',
  phone: '(209) 695-7309',
  phoneHref: 'tel:+12096957309',
  smsHref: 'sms:+12096957309?&body=' + encodeURIComponent("Hi! I'd like a quote for my "),
  email: '', // TODO: owner to confirm public email
  address: {
    street: '100 W Las Palmas Ave',
    city: 'Patterson',
    region: 'CA',
    zip: '95363',
  },
  mapsUrl: 'https://maps.google.com/?q=The+Tint+House+100+W+Las+Palmas+Ave+Patterson+CA+95363',
  mapEmbed:
    'https://maps.google.com/maps?q=100+W+Las+Palmas+Ave+Patterson+CA+95363&t=m&z=15&output=embed',
  hours: [
    { days: 'Tuesday - Saturday', time: '9:00 AM - 5:00 PM' },
    { days: 'Sunday - Monday', time: 'Closed' },
  ],
  // schema.org openingHours format
  openingHours: ['Tu-Sa 09:00-17:00'],
  // Owner: "We will call as soon as a representative is available." No timed promise.
  responsePromise: "We'll call or text you back as soon as we're off the tint table. If we're mid-install, give us a little time.",
  warranty: 'Lifetime warranty against fading, peeling, bubbling and adhesive failure.',
  rating: { value: '5.0', count: 248 },
  reviewsUrl: 'https://business.google.com/v/the-tint-house/0238381919970204506/c94d/_/rev',
  writeReviewUrl: 'https://business.google.com/v/the-tint-house/0238381919970204506/c94d/_/rev',
  instagram: 'https://www.instagram.com/thetinthouse_209/',
  facebook: 'https://www.facebook.com/thetinthouse/',
  awards: ['Best of 209 2024', 'Best of 209 2025'],
  // Owner rotates 2-3 film brands at a time. Drop a logo file in public/brands/ and set `logo` to show it.
  brands: [
    { name: '3M', logo: '' },
    { name: 'Ultrafit', logo: '' },
    { name: 'GCC', logo: '' },
    { name: 'Tint Club', logo: '' },
    { name: 'Geoshield', logo: '' },
    { name: 'Hitek', logo: '' },
    { name: 'Union Window Films', logo: '' },
  ],
  // Local businesses he works with (not film brands). Same logo rule as above.
  partners: [
    { name: 'Azteca 525 Printing', logo: '' },
    { name: '3D Professional Detailing', logo: '' },
    { name: 'Evident Business Solutions', logo: '' },
  ],
  serviceArea: ['Patterson', 'Modesto', 'Turlock', 'Tracy', 'Manteca', 'Newman', 'Crows Landing', 'Westley'],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Automotive Window Tint', href: '/automotive-window-tint/' },
      { label: 'Residential Window Film', href: '/residential-window-film/' },
      { label: 'Commercial Window Film', href: '/commercial-window-film/' },
    ],
  },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'CA Tint Law', href: '/california-tint-law/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const services = [
  {
    slug: 'automotive-window-tint',
    title: 'Automotive Window Tint',
    short: 'Ceramic and carbon tint for cars, trucks and SUVs. Cooler cabin, less glare, more privacy, done in a few hours.',
    image: 'grey-coupe',
  },
  {
    slug: 'automotive-window-tint',
    anchor: '#windshield',
    title: 'Windshield & Sun Strip',
    short: 'Clear heat-rejecting windshield film and a legal sun strip up top. Big difference on Valley summer drives.',
    image: 'view-through-car-window',
  },
  {
    slug: 'automotive-window-tint',
    anchor: '#wraps',
    title: 'Chrome Delete & Accent Wraps',
    short: 'Black out chrome trim and wrap hoods, roofs, mirrors and more. Accent wraps only, no full color changes.',
    image: 'sports-car-wheel',
  },
  {
    slug: 'residential-window-film',
    title: 'Residential Window Film',
    short: 'Cut heat and glare at home, protect floors and furniture from fading, and add daytime privacy. We come to you.',
    image: 'living-room-window',
  },
  {
    slug: 'residential-window-film',
    anchor: '#privacy',
    title: 'Privacy & Mirror Film',
    short: 'One-way mirror and frosted films for bathrooms, street-facing rooms and offices.',
    image: 'living-room-glass-doors',
  },
  {
    slug: 'commercial-window-film',
    title: 'Commercial Window Film',
    short: 'Storefronts and offices: lower cooling costs, comfortable workspaces and a clean professional look.',
    image: 'glass-office-tower',
  },
  {
    slug: 'commercial-window-film',
    anchor: '#decals',
    title: 'Vinyl & Decals',
    short: 'Storefront lettering, hours and logo decals cut and installed for local businesses.',
    image: 'sunset-street',
  },
];

// Real Google reviews (public, Oct 2026). First name + last initial only.
export const reviews = [
  {
    name: 'Julianna E.',
    text: "The staff was friendly, professional, and made the entire process easy from start to finish. They helped me choose the perfect tint, answered all my questions, and the installation was quick and flawless. My car looks incredible and stays much cooler.",
  },
  {
    name: 'Leo T.',
    text: "I called around to get quotes for window tint, and they had the best prices by far. The team took the time to explain all the different tint options without making me feel pressured. They finished my car in about 2 hours, and the tint came out amazing!",
  },
  {
    name: 'J S.',
    text: "Allan has always been kind and honest with his specialized tint services. He made recommendations and showed me examples of what the tints look like before I finalized which ones I wanted. Honest business owner who truly takes care of people.",
  },
  {
    name: 'Mr K.',
    text: "This time adding some much-needed privacy to my home. Allan offers genuine house calls and expertly applied beautiful mirror tint to two of my home windows. He worked around my busy schedule. Whether you're looking to tint your car or home windows, I highly recommend The Tint House.",
  },
  {
    name: 'P C.',
    text: "I had a great experience getting ceramic window tinting installed on my F250. Great job on the installation and the price was very competitive. The owner and staff are great to work with and the installation process was very efficient.",
  },
  {
    name: 'Andrew M.',
    text: "I asked quite a few questions and was met with professional and knowledgeable responses. I'd recommend them especially because of the warranty that comes with the install. Within 3 hours all of my previous tint was removed and new tint put on, including the sun strip up top.",
  },
  {
    name: 'Valentina E.',
    text: "I had my windows and windshield tinted and the experience was excellent. The installation was clean and precise. My car stays noticeably cooler now while still maintaining great visibility. Great service and great results!",
  },
  {
    name: 'Simran K.',
    text: "The staff was very professional and helped me choose the right tint shade for my car. It looks clean, keeps the car much cooler, and the price was very fair. My car was also done right on time.",
  },
  {
    name: 'Rogelio R.',
    text: "Got the premium ceramic tint installed and the results are perfect. It makes the car look amazing. Fast service and expert installation. I'll definitely be bringing my other vehicles back.",
  },
  {
    name: 'Bernardino M.',
    text: "Used their services for window tinting on my Accord and was extremely satisfied with the results and the quality of their work. Went back for ceramic coating on my headlights for UV protection. Extremely satisfied this time too.",
  },
];

export const cities = [
  { slug: 'modesto', name: 'Modesto', drive: 'about 25 minutes', note: 'Valley summers regularly push past 100°. Ceramic tint keeps your cabin cooler on Highway 99 and around town, and the drive to our Patterson shop is short.' },
  { slug: 'turlock', name: 'Turlock', drive: 'about 30 minutes', note: 'Turlock drivers make the short trip west for honest advice, fair pricing and tint that comes with a warranty.' },
  { slug: 'tracy', name: 'Tracy', drive: 'about 25 minutes', note: 'Tracy commuters on I-580 and I-205 deal with hard morning and evening sun glare. Ceramic tint and a sun strip make a real difference.' },
  { slug: 'manteca', name: 'Manteca', drive: 'about 30 minutes', note: 'Most cars are done in a single drop-off visit, so the drive from Manteca is easy to plan around.' },
  { slug: 'newman', name: 'Newman', drive: 'about 15 minutes', note: 'Newman is just down Highway 33. Drop your car off in the morning and pick it up the same day.' },
];
