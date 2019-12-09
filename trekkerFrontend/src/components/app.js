class App {
    constructor() {
        this.adapter = new BaseAdapter()
        this.initBindingsAndEvents()
        this.renderPage(new SignupPage(this.pageContainer, this.adapter))
        // this.renderPage(new LoginPage(this.pageContainer, this.adapter))
    }

    initBindingsAndEvents() {
        this.container = document.querySelector('#app-container')
        this.alertsContainer = document.querySelector('#alerts-container')
        this.navbarContainer = document.querySelector('#navbar-container')
        this.pageContainer = document.querySelector('#page-container')
        this.parksContainer = document.querySelector('#parks-container')
    }

    // Render static HTML -> Update bindings and events -> Make any db calls -> Update page with dynamic HTML
    renderPage(page) {
        page.render()
    }

}