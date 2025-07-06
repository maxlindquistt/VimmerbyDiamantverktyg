const template = document.createElement('template')
template.innerHTML = `
  <style>
    .preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      transition: opacity 0.5s ease-out;
    }
    
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top: 4px solid white;
      animation: spin 1s linear infinite;
    }
    
    .hidden {
      opacity: 0;
      pointer-events: none;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
  
  <div class="preloader">
    <div class="spinner"></div>
  </div>
`

customElements.define('image-preloader',
  /**
   *
   */
  class extends HTMLElement {
    /**
     * Constructor for the image preloader component.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      // Store references to key elements
      this.preloader = this.shadowRoot.querySelector('.preloader')

      // Track loading state
      this.imagesLoaded = 0
      this.imagesToLoad = 0
    }

    /**
     * Lifecycle method called when the element is added to the DOM.
     */
    connectedCallback () {
      // List of background images to preload with ABSOLUTE paths
      const imagePaths = [
        '/img/about-bg-edited2.webp',
        '/img/kontakt-bg.webp',
        '/img/diamond-bg2.webp',
        '/img/services-bg2.webp',
        '/img/warehouse-bg.webp',
        '/img/Verktyg 2.webp',
        '/img/IMG_9792.webp'
      ]

      this.imagesToLoad = imagePaths.length

      // Create a cache of images
      this.imageCache = {}

      // Preload all images
      imagePaths.forEach(path => this.preloadImage(path))

      // Set a fallback timer (in case some images fail to load)
      setTimeout(() => this.hidePreloader(), 3000) // Reduced from 5000 to 3000

      // Dispatch event that preloading has started
      window.dispatchEvent(new CustomEvent('preloading-started'))
    }

    /**
     * Preloads an image and updates the loading state.
     *
     * @param {string} path - The absolute path to the image to preload.
     */
    preloadImage (path) {
      const img = new Image()

      /**
       * Handles successful image load.
       */
      img.onload = () => {
        this.imagesLoaded++
        this.imageCache[path] = img

        // If all images are loaded, or at least 6 images are loaded, hide the preloader
        if (this.imagesLoaded >= this.imagesToLoad || this.imagesLoaded >= 6) {
          this.hidePreloader()
        }
      }

      /**
       * Handles image load error.
       */
      img.onerror = () => {
        // Count failed loads to avoid hanging if an image fails
        this.imagesLoaded++
        console.error(`Failed to load image: ${path}`)

        // Check if we've tried to load all images
        if (this.imagesLoaded >= this.imagesToLoad) {
          this.hidePreloader()
        }
      }

      img.src = path
    }

    /**
     * Hides the preloader and dispatches an event indicating preloading is complete.
     */
    hidePreloader () {
      this.preloader.classList.add('hidden')

      // Dispatch event that preloading is complete
      window.dispatchEvent(new CustomEvent('preloading-complete', {
        detail: { imageCache: this.imageCache }
      }))

      // Remove from DOM after transition completes
      setTimeout(() => {
        this.remove()
      }, 500)
    }
  }
)
