class App {
    constructor() {
        this.adapter = new BaseAdapter()
        this.initBindingsAndEvents()
        this.alertManager = new Alert(this.alertContainer)
        this.router = new Router({
            'signup': new SignupPage(this.pageContainer, this.adapter),
            'login': new LoginPage(this.pageContainer, this.adapter),
            'profile': new ProfilePage(this.pageContainer, this.adapter)
        })

        this.router.assignRedirect(this.pageManagerRedirect.bind(this))
        this.router.assignAlertHandler(this.handleAlert.bind(this))
        this.renderPage('signup')
    }

    initBindingsAndEvents() {
        this.container = document.querySelector('#app-container')
        this.alertContainer = document.querySelector('#alert-container')
        this.pageContainer = document.querySelector('#page-container')
    }

    handleAlert(msg, type, timeout = 5000) {
        this.alertManager.render(msg, type, timeout)
    }

    pageManagerRedirect(page) { // Take page key from Router and renderPage
        this.renderPage(page)
    }

    // Render static HTML -> Update bindings and events -> Make any db calls -> Update page with dynamic HTML
    renderPage(page) {
        this.router.render(page)
    }

}