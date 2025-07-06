const template = document.createElement('template')
template.innerHTML = `
    <style>
.hero {
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: #000;
  background-size: cover;
  background-position: top;
  transition: opacity 0.5s ease;
}

.hero.loading {
  background-image: none;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.75);
  top: 0;
  left: 0;
  z-index: 1;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  color: white;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 0 20px;
}

.hero-content.loaded {
  opacity: 1;
}

.left, .right {
  max-width: 50%;
  padding: 20px;
}

.left {
  margin-top: -150px;
  margin-left: px;
}

.left h1,
.right h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.left p {
  font-size: 1.5rem;
}

.right h1 span {
  display: block;
  font-size: 1.8rem;
}

.right p {
  margin: 1rem 0;
  font-size: 1.3rem;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .left {
    margin-top: -100px;
    margin-left: 0;
  }

  .left, .right {
    max-width: 100%;
    text-align: center;
  }

  .hero-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .left h1,
  .right h1 {
    font-size: 2.5rem;
  }

  .left p,
  .right p {
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  .left h1,
  .right h1 {
    font-size: 2rem;
  }

  .left p,
  .right p {
    font-size: 1rem;
  }

  .left {
    margin-top: 0;
  }
}

    </style>
<section class="hero loading">
<div class="overlay"></div>
<div class="hero-content">
  <div class="left">
    <h1>Proffsverktyg för betonghåltagning.</h1>
    <p>Vi säljer proffsprodukter till håltgningsfirmor samt löder om dina diamantkärnborr.</p>
  </div>
  <div class="right">
    <h1>Kontakta oss<br>redan idag</h1>
    <p><strong>Tel:</strong> 070-2297636<br><strong>Mail:</strong> christian.linderson@gmail.com</p>
    <custom-button text = "Kontakta oss" href = "/contact"></custom-button>
  </div>
</div>
</section>
`

customElements.define('hero-section',
  /**
   * Extends the HTMLElement
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the custom element and attaches a shadow DOM.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      // Get references to elements
      this.heroSection = this.shadowRoot.querySelector('.hero')
      this.heroContent = this.shadowRoot.querySelector('.hero-content')
    }

    /**
     * Returns an array of attributes to be observed for changes.
     *
     * @returns {string[]} The list of attributes to be observed.
     */
    static get observedAttributes () {
      return []
    }

    /**
     * Called when one of the observed attributes changes.
     *
     * @param {string} name The name of the attribute that changed.
     * @param {string} oldValue The old value of the attribute.
     * @param {string} newValue The new value of the attribute.
     */
    attributeChangedCallback (name, oldValue, newValue) {
    }

    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback () {
      // Listen for preloading complete event
      window.addEventListener('preloading-complete', () => {
        // Set the background image after preloading
        this.heroSection.style.backgroundImage = 'url(/js/components/hero-section/img/home-bg.webp)'
        this.heroSection.classList.remove('loading')

        // Show content with a slight delay for smooth transition
        setTimeout(() => {
          this.heroContent.classList.add('loaded')
        }, 100)
      })

      // Fallback if preloading event never fires
      setTimeout(() => {
        if (!this.heroSection.style.backgroundImage) {
          this.heroSection.style.backgroundImage = 'url(/js/components/hero-section/img/home-bg.webp)'
          this.heroSection.classList.remove('loading')
          this.heroContent.classList.add('loaded')
        }
      }, 3000)
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback () {
    }
  })
