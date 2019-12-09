class PageManager {
    constructor(container, adapter) {
        this.container = container 
        // this.adapter = new SignupAdapter(adapter) // Instantiate signup adapter with base adapter (decorate base with token)
        // this.loginAdapter = new LoginAdapter(adapter)
    }

    // If there's nothing to fetch in child class, render will fill method with null and avoid erroring
    fetchAndRenderPageResources() {
        return null
    }

    render() {
        this.container.innerHTML = this.staticHTML // Render static HTML
        this.initBindingsAndEvents() // Set up bindings and event listeners
        this.fetchAndRenderPageResources() // Fetch from db and render dynamic HTML
    }
    
}