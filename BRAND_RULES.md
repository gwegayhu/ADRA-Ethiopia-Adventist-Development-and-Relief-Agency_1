# ADRA Brand Rules & Compliance Guide

This repository strictly follows the official **ADRA Graphic Standards Manual & Branding Guide**. All contributors, designers, and engineers must follow these brand invariants.

---

## 1. Core Brand Identity & Messaging
- **Full Name:** Adventist Development and Relief Agency
- **Acronym:** Always capitalized **ADRA**; never translate the acronym in any language.
- **Purpose:** "To serve humanity so all may live as God intended."
- **Motto:** "Justice. Compassion. Love."
- **Identity & Affiliation:** The global humanitarian arm of the Seventh-day Adventist Church, operating in over 130 countries regardless of ethnicity, political affiliation, gender, or religion.
- **Core Framework (The Well-Being Triangle):** Education, Health, Sustainable Livelihoods; Well-Being at the center.
- **Four Core Strengths:** Fueled by Faith, Extensive Network, Locally Led, Reputation Assured.
- **Statistics Policy:** Do not hard-code global statistics. Keep them in `/src/content/stats.ts` marked *"verify before publishing"*.

---

## 2. Logo Standards (Zero Deviations)
- Use **ONLY** official SVG assets in `/public/brand/`:
  - `adra-vertical-green.svg` (Primary vertical logo)
  - `adra-vertical-white.svg`
  - `adra-vertical-black.svg`
  - `adra-horizontal-green.svg` (Horizontal logo for narrow headers/banners)
  - `adra-horizontal-white.svg`
  - `adra-globe-green.svg` (Globe mark only)
  - `adra-globe-white.svg`
- **Colors:** Pantone 335 C (`#007B5F`), 100% Black (`#231F20`), or White (`#FFFFFF`) **ONLY**.
- **Minimum Sizing:** Vertical Logo / Globe Mark $\ge 66\text{px}$; Horizontal Logo $\ge 100\text{px}$.
- **Clear Space:** Minimum clear space on all sides equals the height of the "A" in the ADRA logotype (globe: half the mark's height).
- **Country Names:** **NEVER** append "Ethiopia" or any office name into the logo lockup artwork. Display as separate live text outside its clear space.
- **Strictly Forbidden:** Off-brand colors, drop shadows, outlines, rearranging elements, tilting/rotating, omitting the globe, stretched proportions, or tints below 100%.

---

## 3. Color Tokens
| Name | Value | Usage |
|---|---|---|
| `--adra-green` | `#007B5F` (PMS 335 C) | Primary color. **REQUIRED on every single page** as at least an accent. |
| `--adra-gray` | `#54585A` (PMS 425 C) | Secondary neutral, text, borders, outside photo credits. |
| `--adra-black` | `#231F20` | 100% Black for text and contrast. |
| `--white` | `#FFFFFF` | Backgrounds, reverse text, and negative space. |
| `--adra-green-700` | `#00614A` | Hover and pressed button states only. |
| `--adra-green-50` | `#E5F2EF` | Light tint background (full `--adra-green` must also appear on screen). |
| `--surface-gray` | `#F0F0F0` | Light panel backgrounds. |

**Contrast Rule:** Green or gray on white; white on green or gray. **NEVER** green text on gray or gray text on green.

---

## 4. Typography Rules
- **Headlines / Nav / Buttons:** Montserrat Bold (700). Sentence case, letter-spacing 0.
- **Captions, Labels, URL:** Montserrat Bold (700). **ALL CAPS**, letter-spacing 0.05em (50 tracking spec).
- **Body Copy:** Zilla Slab Regular (400), 16px minimum mobile, 17–18px desktop, line-height 1.6. Left-aligned, **never justified**, **never hyphenated**. Max line length $\approx 70\text{ch}$ (12–14 words/line).
- **Script Accent (Kaushan Script):** Title-case only, never uppercase, never tracked, rotate 3°–10° (default `-4°`).
- **Ethiopic Languages (`am`, `ti`):**
  - Headings/UI: Noto Sans Ethiopic Bold.
  - Body Copy: Noto Serif Ethiopic Regular.
  - Disable text-transform and letter-spacing everywhere.
  - Set slogan in Noto Sans Ethiopic Bold with **NO rotation or tracking**.
- **Small Caps:** Strictly forbidden on all fonts.

---

## 5. Photography & Imagery Standards
- **Dignity First:** Human-centric, hopeful, portraying people with autonomy and agency. No pity framing.
- **No Stock/AI Faces:** Use authentic ADRA field photography or neutral gradient placeholders labelled *"Photo placeholder - replace with ADRA photo"*.
- **Mandatory Photo Credit Format:**
  ```
  Photo: © [YEAR] ADRA | [Photographer's Name or ADRA Office]
  ```
  Small type ($\approx 11\text{px}$). Outside credit in `--adra-gray`; inside in white or black.

---

## 6. Signature Brand Devices
1. `<BrandFrame>`: 1.5–2px outline box with top-left logo tab and bottom-right `ADRA.ORG` URL tab.
2. `<SloganLockup>`: "Justice. Compassion. Love." in rotated Kaushan Script inside a BrandFrame.
3. `<PhotoPanel>`: Full-bleed image with `rgba(0,123,95,0.88)` text panel at bottom-left.
4. `<StatCallout>`: Large Montserrat Bold number with thin rule and uppercase tracked caption.
5. `<WellbeingTriangle>`: Equilateral SVG triangle showing Education, Health, and Sustainable Livelihoods.
6. `<WavePattern>`: Subtle green line-art divider (never behind text).

---

## Contributor Brand Compliance Checklist
- [ ] Green `#007B5F` appears on every page.
- [ ] Logo is in Green, Black, or White only; never altered; min size and clear space enforced.
- [ ] No country name inside the logo lockup.
- [ ] Headlines in sentence case; captions and URL in uppercase with 0.05em tracking.
- [ ] No justified text, no hyphenation, no small-caps.
- [ ] Kaushan Script only on short phrases/slogans, rotated 3°–10°, never uppercase or tracked.
- [ ] Ethiopic fallback fonts active for Amharic and Tigrinya with tracking and uppercase disabled.
- [ ] Photo credits follow the exact `Photo: © YEAR ADRA | [Name]` format.
- [ ] Body copy is 16px+ with WCAG AA contrast.
- [ ] No hardcoded global statistics; verified through `/src/content/stats.ts`.
