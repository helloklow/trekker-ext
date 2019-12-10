class ProfilePage extends PageManager {
    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter) // Set up adapter for itself
        // this.user = null
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
    }

    get staticHTML() {
        if (this.is_authenticated) {    
            return (`
                <h2 class="welcome">Welcome, user</h2><br><br><br><br>
                <button type="button" id="logout-btn" class="btn btn-primary btn-block btn-md">Logout</button>
            `)
        }
    }

}