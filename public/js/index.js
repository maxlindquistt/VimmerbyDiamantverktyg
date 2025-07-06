import './components/image-preloader/index.js'
import './components/custom-button/index.js'
import './components/nav-bar/index.js'
import './components/hero-section/index.js'

/**
 *
 */
class LoadingManager {
  /**
   * Creates an instance of LoadingManager.
   * Initializes state variables and sets up event listeners for page load and image preloading.
   */
  constructor () {
    this.pageLoaded = false
    this.imagesPreloaded = false

    // Listen for preloading completion
    window.addEventListener('preloading-complete', () => {
      this.imagesPreloaded = true
      this.showContent()
    })

    // Listen for page load
    window.addEventListener('DOMContentLoaded', () => {
      this.pageLoaded = true
      this.showContent()
    })

    // Add page transition management
    this.setupLinkInterceptors()
  }

  /**
   * Show content when both page and images are loaded.
   */
  showContent () {
    // Only show content when both conditions are met
    if (this.pageLoaded && this.imagesPreloaded) {
      document.body.classList.add('content-loaded')
    }
  }

  /**
   * Sets up interceptors for link clicks to enable smooth page transitions.
   */
  setupLinkInterceptors () {
    // Add smooth page transitions by intercepting navigation
    document.addEventListener('click', (e) => {
      // Find closest anchor tag if the click was on a child element
      const link = e.target.closest('a')

      if (link && link.getAttribute('href') &&
          link.getAttribute('href').startsWith('/') &&
          !link.getAttribute('target')) {
        e.preventDefault()
        const href = link.getAttribute('href')

        // Add a fade-out effect
        document.body.classList.add('page-transition')

        // Navigate after transition
        setTimeout(() => {
          window.location.href = href
        }, 300)
      }
    })
  }
}

// Initialize loading manager
// eslint-disable-next-line no-new
new LoadingManager()

// Add preloader to the page
if (!document.querySelector('image-preloader')) {
  document.body.prepend(document.createElement('image-preloader'))
}
