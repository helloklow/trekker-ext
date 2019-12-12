class ProfilePage extends PageManager {
    constructor(container, adapter) {
        super(container)
        this.profileAdapter = new ProfileAdapter(adapter) // Set up adapter for itself
        this.user = null
        this.parksAdapter = new ParksAdapter(adapter)
        this.memoizedParks = []
        // this.visitsAdapter = new VisitsAdapter(adapter)
        // this.memoizedVisits = []
    }

    initBindingsAndEvents() {
        return null
    }

    // Create and move to header container so it isn't rendered over?? !!
    logoutBindingsAndEvents() {
        this.logoutBtn = this.container.querySelector('#logout-btn')
        this.logoutBtn.addEventListener('click', this.handleLogout.bind(this))
    }

    async fetchAndRenderPageResources() {
        try {
            const userObj = await this.profileAdapter.getUser()
            this.user = new User(userObj)
            this.renderUser()
        } catch(err) {
            this.handleError(err)
        }
        try {
            const parkObjs = await this.parksAdapter.getParks()
            parkObjs.map(p => this.memoizedParks.push(new Park(p)))
            this.renderParks()
        } catch(err) {
            this.handleError(err)
        }
        // try {
        //     const visitObjs = await this.visitsAdapter.getVisits()
        //     visitObjs.map(v => this.memoizedVisits.push(new Visit(v)))
        //     // this.renderVisits()
        //     console.log(this.memoizedVisits)
        // } catch(err) {
        //     this.handleError(err)
        // }
    }

    get is_authenticated() {
        return !!this.profileAdapter.token
    }

    handleLogout(e) {
        e.preventDefault()
        this.redirect('login')
        this.profileAdapter.token = null
        // console.log(this.profileAdapter.token)
    }

    get staticHTML() {
        if (this.is_authenticated) {   
            return (`
                <button type="button" id="logout-btn" class="btn btn-primary btn-block btn-md">Logout</button>
            `)
        }
    }

    // Along with logout button, needs to render without being rendered over!! ??
    renderUser() {
        this.container.innerHTML = this.user.profileHTML
    }

    renderParks() {
        this.container.innerHTML = this.memoizedParks.map(p => p.parkCardHTML).join('')
    }


}