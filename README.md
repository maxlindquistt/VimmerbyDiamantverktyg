# Vimmerby Diamantverktyg

A professional website built for Vimmerby Diamantverktyg, a company specializing in diamond tools. This project was developed during my first year as a student at Linnaeus University as part of the course **1DV613 - Mjukvaruutvecklingsprojekt** (Software Development Project).

## 📚 About

This project represents one of my first full-stack web development experiences, combining modern web technologies to create a functional business website with custom components and a contact form system.

## 🛠️ Technologies Used

### Framework & Backend
- **Astro 7** - Web framework; pages are prerendered to static HTML at build time
- **@astrojs/node** - Node.js adapter (standalone mode) that serves the site and handles the contact form on demand
- **Node.js** - JavaScript runtime environment (v22.22 or newer)
- **Nodemailer** - Email sending functionality for the contact form

### Frontend
- **Astro components** - Server-rendered, reusable UI components with scoped CSS
- **HTML5 & CSS3** - Semantic markup and styling, with native cross-document view transitions between pages
- **Vanilla JavaScript** - Only a small script for the mobile menu

### Development Tools
- **TypeScript** - Type checking via `astro check`
- **npm** - Package management

## 🌟 Features

- **Multi-page website** with dedicated sections for:
  - Home page with hero section
  - About page
  - Services page
  - Diamond tools page
  - Warehouse page
  - Contact page
- **Custom Web Components**:
  - Custom button component
  - Hero section with image preloading
  - Navigation bar
  - Image preloader for optimized loading
- **Contact Form** - Integrated email functionality using Nodemailer
- **Responsive Design** - Mobile-friendly layout
- **Error Handling** - Custom 404 page

## 📁 Project Structure

```
├── public/                    # Static files served as-is
│   ├── img/                  # Images
│   └── favicon.ico
├── src/
│   ├── components/           # Astro components (NavBar, HeroSection, CustomButton, Footer)
│   ├── layouts/              # Page layout (BaseLayout.astro)
│   ├── lib/                  # Server-side logic (mailer.ts)
│   ├── pages/                # File-based routes, including 404.astro
│   │   └── services/         # /services, /services/diamond, /services/warehouse
│   └── styles/               # Global stylesheet
├── astro.config.mjs          # Astro configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies and scripts
```

## 📝 License

&copy; 2025 Vimmerby Diamantverktyg. All Rights Reserved.

## 👨‍💻 Author

**Max Lindquist**

Developed as part of the course 1DV613 - Mjukvaruutvecklingsprojekt at Linnaeus University during my first year of studies and is currently deployed at [diamantverktyg.com](https://diamantverktyg.com).

---

*This project was created as a learning exercise and represents my growth as a developer during my first year at university.*
