class ProfilePage extends PageManager {
    constructor(container, adapter) {
        super(container)
        this.profileAdapter = new ProfileAdapter(adapter) // Set up adapter for itself
        this.user = null
        this.parksAdapter = new ParksAdapter(adapter)
        this.memoizedParks = []
    }

    async fetchAndRenderPageResources() {
        try {
            const userObj = await this.profileAdapter.getUser()
            this.user = new User(userObj)
            this.renderUser()
        } catch(err) {
            this.handleError(err)
        }
        try { // probably won't work!
            const parkArr = await this.parksAdapter.getParks()
            return await parkArr.forEach(p => this.memoizedParks.push(new Park(p)))
            console.log(this.memoizedParks)
            //this.parks = new Park(parkArr)
            // this.renderParks()
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

    renderUser() {
        this.container.innerHTML = this.user.profileHTML
    }


}