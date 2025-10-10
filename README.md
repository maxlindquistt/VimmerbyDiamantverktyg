# Vimmerby Diamantverktyg

A professional website built for Vimmerby Diamantverktyg, a company specializing in diamond tools. This project was developed during my first year as a student at Linnaeus University as part of the course **1DV613 - Mjukvaruutvecklingsprojekt** (Software Development Project).

## 📚 About

This project represents one of my first full-stack web development experiences, combining modern web technologies to create a functional business website with custom components and a contact form system.

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js v5** - Web application framework
- **EJS** - Embedded JavaScript templating engine
- **Nodemailer** - Email sending functionality for the contact form

### Frontend
- **Vanilla JavaScript** - Custom web components
- **HTML5 & CSS3** - Semantic markup and styling
- **Web Components API** - Reusable custom elements

### Development Tools
- **Nodemon** - Development server with auto-restart
- **ESLint** - Code linting with LNU configuration
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
├── public/                # Static assets
│   ├── css/              # Global stylesheets
│   ├── img/              # Images
│   └── js/               # Client-side JavaScript
│       ├── components/   # Custom web components
│       └── index.js      # Main client script
├── src/
│   ├── server.js         # Express server setup
│   ├── controllers/      # Business logic
│   ├── routes/           # Route definitions
│   └── views/            # EJS templates
│       ├── partials/     # Reusable template parts
│       └── errors/       # Error pages
└── package.json          # Project dependencies
```

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Max Lindquist**

Developed as part of the course 1DV613 - Mjukvaruutvecklingsprojekt at Linnaeus University during my first year of studies and is currently deployed at [diamantverktyg.com](https://diamantverktyg.com).

---

*This project was created as a learning exercise and represents my growth as a developer during my first year at university.*
