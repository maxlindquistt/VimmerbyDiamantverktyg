import '../custom-button/index.js'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: black;
      color: white;
      position: relative;
      z-index: 10;
      padding: 0 1rem;
    }

    .navbar::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -50px;
      width: 100%;
      height: 50px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
      pointer-events: none;
      z-index: 5;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .logo img {
      height: 100px;
    }

    .menu-toggle {
      display: none;
      font-size: 2rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
    }

    nav {
      display: flex;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .phone {
      font-size: 1.2rem;
    }

  @media (max-width: 768px) {

  .menu-toggle {
    display: block;
  }

  nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: black;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease-in-out;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  nav.open {
    max-height: 500px; /* Enough to reveal the content */
  }

  nav ul {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem 0;
    align-items: center;
    margin-top: 15px;
    z-index: 2;
  }
}
  </style>

  <header class="navbar">
    <div class="logo">
      <a href="/">
        <img src="/js/components/nav-bar/img/diamond-logo.webp" alt="Vimmerby Diamantverktyg logo">
      </a>
    </div>
    <button class="menu-toggle" aria-label="Toggle menu">&#9776;</button>
    <nav>
      <ul>
        <custom-button text="Startsida" href="/"></custom-button>
        <custom-button text="Tjänster" href="/services"></custom-button>
        <custom-button text="Om oss" href="/about"></custom-button>
        <custom-button text="Kontakt" href="/contact"></custom-button>
      </ul>
    </nav>
    <div class="phone">070-2297636</div>
  </header>
`

customElements.define('nav-bar',
/**
 * Custom element class for the navigation bar.
 */
  class extends HTMLElement {
    /**
     * Creates an instance of the nav-bar element.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    /**
     * Called when the element is inserted into the DOM.
     */
    connectedCallback () {
      const toggleButton = this.shadowRoot.querySelector('.menu-toggle')
      const nav = this.shadowRoot.querySelector('nav')

      toggleButton.addEventListener('click', (e) => {
        e.stopPropagation()
        nav.classList.toggle('open')
      })

      // Close the menu if clicking outside of nav or toggle
      document.addEventListener('click', (event) => {
        const isClickInside = this.shadowRoot.contains(event.target)
        const isMenuOpen = nav.classList.contains('open')
        if (!isClickInside && isMenuOpen) {
          nav.classList.remove('open')
        }
      })
    }
  })
