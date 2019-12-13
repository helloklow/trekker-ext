class PageManager {
    constructor(container, visitsContainer, parksContainer) {
        this.container = container 
        this.visitsContainer = visitsContainer 
        this.parksContainer = parksContainer
    }

    // If there's nothing to fetch in child class, render will fill method with null and avoid erroring
    fetchAndRenderPageResources() {
        return null
    }

    handleError(err) {
        if (err.status === 401) { 
            this.handleAlert(err)
            this.redirect('login') // Redirect won't work, status not included w invalid email/pass and unauth login errors
        } else {
            this.handleAlert(err)
        }
    }

    render() {
        this.container.innerHTML = this.staticHTML // Render static HTML
        this.initBindingsAndEvents() // Set up bindings and event listeners
        this.fetchAndRenderPageResources() // Fetch from db and render dynamic HTML
    }
    
}