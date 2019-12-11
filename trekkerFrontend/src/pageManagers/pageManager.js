class PageManager {
    constructor(container) {
        this.container = container 
    }

    // If there's nothing to fetch in child class, render will fill method with null and avoid erroring
    fetchAndRenderPageResources() {
        return null
    }

    handleError(err) {
        this.handleAlert(err)
        // if (err.value === 401) { -> Redirect won't work!
        //     this.handleAlert(err.msg)
        //     this.redirect('login')
        // } else {
        //     this.handleAlert(err)
        // }
    }

    render() {
        this.container.innerHTML = this.staticHTML // Render static HTML
        this.initBindingsAndEvents() // Set up bindings and event listeners
        this.fetchAndRenderPageResources() // Fetch from db and render dynamic HTML
    }
    
}