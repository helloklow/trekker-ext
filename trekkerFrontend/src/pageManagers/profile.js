class ProfilePage extends PageManager {
    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter) // Set up adapter for itself
        // this.user = null
    }

    async fetchAndRenderPageResources() {
        try {
            const userObj = await this.adapter.getUser()
            const user = new User(userObj)
        } catch(err) {
            this.handleError(err)
        }
    }

    get is_authenticated() {
        return !!this.adapter.token
    }

    initBindingsAndEvents() {
        this.logoutBtn = this.container.querySelector('#logout-btn')

        this.logoutBtn.addEventListener('click', this.handleLogout.bind(this))
    }

    handleLogout(e) {
        e.preventDefault()
        this.redirect('login')
        this.adapter.token = null
        // console.log(this.adapter.token)
    }

    get staticHTML() {
        if (this.is_authenticated) {   
            return (`
                <button type="button" id="logout-btn" class="btn btn-primary btn-block btn-md">Logout</button>
            `)
        }
    }

}