# Autentični Vijetnam - Queen of Compass

Moderan, responzivan landing page za luksuzno putovanje u Vijetnam (April 2026).

## Tehnologije

- **Next.js 16** - React framework sa SSG/SSR
- **Tailwind CSS v4** - Utility-first CSS
- **Material Design** principi

## Lokalni razvoj

```bash
# Instaliraj dependencies
npm install

# Pokreni development server
npm run dev

# Otvori http://localhost:3000
```

## Deployment na Vercel

### Opcija 1: GitHub + Vercel (Preporučeno)

1. Kreiraj GitHub repo:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/vietnam-trip-website.git
git push -u origin main
```

2. Idi na [vercel.com](https://vercel.com)
3. Klikni "New Project"
4. Importuj svoj GitHub repo
5. Klikni "Deploy"

### Opcija 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Menjanje sadržaja putem promptova

Sav sadržaj sajta je u fajlu `content/data.js`. Možeš ga menjati direktno ili putem AI promptova:

### Primer prompta:
> "Promeni cenu putovanja na 2100 EUR"

### Struktura sadržaja:

- `siteConfig` - Osnovne info (brend, datumi, cena)
- `heroContent` - Hero sekcija
- `introContent` - O putovanju tekst
- `featuresContent` - Način putovanja (6 kartica)
- `itineraryContent` - Dnevni plan (15 dana)
- `pricingContent` - Cene i šta je uključeno
- `notForYouContent` - Za koga nije
- `footerContent` - Footer i kontakt
- `galleryImages` - Slike (Unsplash URL-ovi)

## Zamena slika

Slike su trenutno sa Unsplash-a kao placeholder. Za prave slike:

1. Dodaj slike u `/public/images/`
2. Izmeni URL-ove u `content/data.js`:
```js
// Umesto:
backgroundImage: "https://images.unsplash.com/..."

// Stavi:
backgroundImage: "/images/hero.jpg"
```

## SEO

- Meta tagovi su u `app/layout.js`
- Open Graph slike: dodaj `/public/images/og-image.jpg` (1200x630px)

## Struktura projekta

```
vietnam-trip-website/
├── app/
│   ├── globals.css      # Tailwind + custom styles
│   ├── layout.js        # Root layout + meta
│   └── page.js          # Glavna stranica
├── components/
│   ├── Navigation.js    # Nav bar
│   ├── Hero.js          # Hero sekcija
│   ├── About.js         # O putovanju + Features
│   ├── Itinerary.js     # Timeline 15 dana
│   ├── Pricing.js       # Cene + Not For You
│   └── Footer.js        # CTA + Footer
├── content/
│   └── data.js          # SAV SADRŽAJ OVDE
└── public/
    └── images/          # Lokalne slike
```

## Licenca

© 2026 Queen of Compass
