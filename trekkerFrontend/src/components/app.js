class App {
    constructor() {
        this.adapter = new BaseAdapter()
        this.initBindingsAndEvents()
        this.router = new Router({
            'signup': new SignupPage(this.pageContainer, this.adapter),
            'login': new LoginPage(this.pageContainer, this.adapter),
            'profile': new ProfilePage(this.pageContainer, this.adapter)
            
        })
        this.router.assignCallback(this.pageManagerRedirect.bind(this))
        this.renderPage('signup')
    }

    initBindingsAndEvents() {
        this.container = document.querySelector('#app-container')
        this.alertsContainer = document.querySelector('#alerts-container')
        this.navbarContainer = document.querySelector('#navbar-container')
        this.pageContainer = document.querySelector('#page-container')
        this.parksContainer = document.querySelector('#parks-container')
    }

    pageManagerRedirect(page) { // Take page key from Router and renderPage
        this.renderPage(page)
    }

    // Render static HTML -> Update bindings and events -> Make any db calls -> Update page with dynamic HTML
    renderPage(page) {
        this.router.render(page)
    }

}