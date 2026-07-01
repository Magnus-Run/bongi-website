# North Invent — Website Asset Manifest

Assets pulled from northinvent.com on 30-06-2026. All sourced from North Invent's own site. For Lena (design) and Arlo (build) to wire into the pages, replacing the labelled placeholder blocks.

Base path from `webpages/`: `assets/`

---

## Product Photos (`assets/products/`)

High-resolution PNGs (~1MB each), studio renders on white. Ideal for the Wave II product page and home product spotlight.

| File | Suggested use |
|------|---------------|
| `1.-WE270-000-100-Monitor-front.png` | Wave II hero / primary product shot (front) |
| `2.-WE270-000-100-Monitor-backside.png` | Connections / detail section |
| `3.-WE270-000-124-Monitor-with-hinge-front.png` | Mounting section — hinge configuration |
| `6.-WE270-000-191-Monitor-with-hinge-HMI-front.png` | HMI variant / product range card |
| `10.-WE270-000-219-Monitor-with-PAN-HMI-front.png` | PAN HMI variant / range card |
| `15.-Detachable-Electronics-Unit.png` | SWAP / modular electronics section |

---

## Feature & Spec Icons (`assets/icons/`)

Single-colour SVGs. Use for the product highlights bar, spec features, and mounting section. Recolour to brand palette via CSS `fill` where they are inline, or `filter` if used as `<img>`.

| File | Represents |
|------|-----------|
| `touch.svg` | PCAP multitouch |
| `hinge.svg` | Hinge mounting |
| `frame-glass.svg` | Full glass front |
| `swap.svg` | SWAP modular electronics |
| `scale.svg` | Size range / scalability |
| `certificate.svg` | Certifications (IEC 60945 / DNV) |
| `sun.svg` | Sunlight readability / brightness |
| `eye.svg` | Optical bonding / viewing |
| `cpu.svg` | Panel PC / compute |
| `test.svg` | Testing / QA |
| `play-circle.svg` | Video play button (hero) |

---

## Illustrations (`assets/illustrations/`)

Line-style SVG illustrations used on the current company and home pages. Useful as section accents on About; keep usage minimal per the brand's typography-led style.

| File | Current use on their site |
|------|---------------------------|
| `multi-touch.svg` | Home hero feature illustration |
| `light.svg` | Company — "Clear purpose" value |
| `mountain.svg` | Company — value/ethos |
| `target.svg` | Company — focus/strategy |
| `world-hand.svg` | Company — global network |
| `handshake.svg` | Company — partnerships |

---

## Brand assets (in `../Tools/`)

| File | Use |
|------|-----|
| `north_invent_logo.svg` | Logo (nav + footer) — already referenced |

---

## Partner / Trust Logos (`assets/partners/`)

Third-party trademark logos (vector, from Wikimedia Commons). **For the password-protected sales-pitch mockup only — not for public launch.** Use in the home and about trust/partner rows.

| File | Mark |
|------|------|
| `wartsila.svg` | Wärtsilä (NACOS Platinum) |
| `thales.svg` | Thales (WaveLINK partner) |
| `red-dot.svg` | Red Dot Design Award |
| `dnv-gl.svg` | DNV GL (type approval) |

**Two flags before this ever goes public:**
1. All four underlying claims are still `[UNVERIFIED]` in Dex's copy — client must confirm.
2. `dnv-gl.svg` is the **pre-2021 "DNV GL"** mark. The company rebranded to **DNV** in 2021. For a public site, replace with the current DNV logo and update the copy naming. Acceptable for the mockup as-is.

These are third-party trademarks. Public launch requires accurate claims plus permission / correct logo files obtained via North Invent.

---

## Notes for Arlo
- Product PNGs are large (~1MB). Compress / convert to WebP before production push for performance.
- Icons are monochrome — set `fill` to `#136779` (teal) or `#46BB89` (green) per Lena's spec, not their original colour.
