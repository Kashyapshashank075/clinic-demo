# 🦷 DentaCare Clinic — React Website

A clean, modern, fully responsive dental clinic website built with React and React Router.

---

## 📁 Project Structure

```
dental-clinic/
├── public/
│   └── index.html              # HTML shell with Google Fonts
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Sticky responsive navbar
│   │   ├── Navbar.css
│   │   ├── Footer.jsx          # Footer with links & contact
│   │   ├── Footer.css
│   │   ├── Hero.jsx            # Home hero section
│   │   ├── Hero.css
│   │   ├── Services.jsx        # Services grid (6 cards)
│   │   ├── Services.css
│   │   ├── WhyUs.jsx           # Stats bar + reasons grid
│   │   ├── WhyUs.css
│   │   ├── OurWork.jsx         # Before/after cases
│   │   ├── OurWork.css
│   │   ├── AppointmentSection.jsx  # Working hours + form
│   │   ├── AppointmentSection.css
│   │   ├── AppointmentForm.jsx # Reusable appointment form
│   │   ├── AppointmentForm.css
│   │   ├── Reviews.jsx         # Patient testimonials
│   │   └── Reviews.css
│   ├── pages/
│   │   ├── Home.jsx            # Home page (all sections)
│   │   ├── About.jsx           # About page (team, timeline)
│   │   ├── About.css
│   │   ├── Contact.jsx         # Contact page + FAQ
│   │   └── Contact.css
│   ├── data/
│   │   └── siteData.js         # All site content (services, reviews, team…)
│   ├── styles/
│   │   └── global.css          # CSS variables, resets, utilities
│   ├── App.js                  # Router + layout
│   └── index.js                # React entry point
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, Services, Why Us, Our Work, Appointment, Reviews |
| **About** | `/about` | Mission, Timeline, Team, Appointment CTA |
| **Contact** | `/contact` | Contact details, Message form, FAQ |

---

## ✨ Features

- ✅ Sticky navbar with mobile hamburger menu
- ✅ Hero section with animated doctor card
- ✅ 6-card services grid
- ✅ Animated stats bar
- ✅ Before/After case showcase (tabbed)
- ✅ Working hours with appointment form (validated)
- ✅ Patient reviews with rating banner
- ✅ Team profiles with milestone timeline
- ✅ Contact form + FAQ section
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ CSS animations (float, fadeUp, pulse)
- ✅ No external UI library — pure CSS

---

## 🎨 Design

- **Fonts**: Playfair Display (headings) + DM Sans (body)
- **Primary**: Teal `#0a7c6e`
- **Accent**: Gold `#c9a84c`
- **Background**: Cream `#faf9f6`

---

## 🛠 Customise

All site content is in **`src/data/siteData.js`** — edit services, reviews, team members, working hours, and stats there.

CSS variables (colors, fonts, shadows, radii) are all in **`src/styles/global.css`**.
