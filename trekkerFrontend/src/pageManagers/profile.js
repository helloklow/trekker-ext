class ProfilePage extends PageManager {
    constructor(container, visitsContainer, parksContainer, adapter) {
        super(container, visitsContainer, parksContainer)
        this.profileAdapter = new ProfileAdapter(adapter) // Set up adapter for itself
        this.user = null
        this.parksAdapter = new ParksAdapter(adapter)
        this.memoizedParks = []
        this.visitsAdapter = new VisitsAdapter(adapter)
        this.memoizedVisits = []
        this.visitedParks = []
    }

    initBindingsAndEvents() {
        this.addVisitBtn.addEventListener('click', this.visitForm.bind(this))
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
        try {
            const visitObjs = await this.visitsAdapter.getVisits()
            visitObjs.map(v => this.memoizedVisits.push(new Visit(v)))
            this.collectVisits()
        } catch(err) {
            this.handleError(err)
        }
    }

    get is_authenticated() {
        return !!this.profileAdapter.token
    }

    get staticHTML() {
        this.logoutBtn = document.querySelector('#logout-btn')
        this.addVisitBtn = document.querySelector('#add-visit-btn')
        if (this.is_authenticated) {
            this.logoutBtn.style.visibility="visible"
            this.addVisitBtn.style.visibility="visible"
        }
        return (`
            <div class="loader"></div>
        `)
    }

    renderUser() {
        this.container.innerHTML = this.user.profileHTML
    }

    renderParks() {
        this.parksContainer.innerHTML = this.memoizedParks.map(p => p.parkCardHTML).join('')
    }

    collectVisits() {
        const visitIds = this.memoizedVisits.map(v => v.park_id)
        for (let id of visitIds) {
            this.visitedParks.push(this.memoizedParks.find(p => p.id == id)
            )}
        this.visitsContainer.style.visibility = 'visible'
        this.renderVisits()
    }

    renderVisits() {
        this.visitsContainer.innerHTML = this.memoizedVisits.map(v => v.visitHTML).join('')
    }

    // visitForm(e) {
    //     e.preventDefault()
    //     console.log('visit form')
    // }

    handleLogout(e) {
        e.preventDefault()
        this.profileAdapter.token = null
        this.redirect('login')
        location.reload()
        // console.log(this.profileAdapter.token)
    }

}