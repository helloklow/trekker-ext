class App {
    constructor() {
        this.adapter = new BaseAdapter()
        this.initBindingsAndEvents()
        this.alertManager = new Alert(this.alertContainer)
        this.router = new Router({
            'signup': new SignupPage(this.headerContainer, this.adapter),
            'login': new LoginPage(this.headerContainer, this.adapter),
            'profile': new ProfilePage(this.headerContainer, this.visitsContainer, this.parksContainer, this.adapter)
        })
        this.router.assignRedirect(this.pageManagerRedirect.bind(this))
        this.router.assignAlertHandler(this.handleAlert.bind(this))
        // this.renderPage('signup')
        this.renderPage('login')
    }

    initBindingsAndEvents() {
        this.alertContainer = document.querySelector('#alert-container')
        this.headerContainer = document.querySelector('#header-container')
        this.visitsContainer = document.querySelector('#visits-container')
        this.parksContainer = document.querySelector('#parks-container')
    }

    handleAlert(msg, type = 'danger', timeout = 5000) {
        this.alertManager.render(msg, type, timeout)
    }

    // Take page key from Router and renderPage
    pageManagerRedirect(page) { 
        this.renderPage(page)
    }

    // Render static HTML -> Update bindings and events -> Make any db calls -> Update page with dynamic HTML
    renderPage(page) {
        this.router.render(page)
    }

}