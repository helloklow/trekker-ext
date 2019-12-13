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
        try {
            const visitObjs = await this.visitsAdapter.getVisits()
            visitObjs.map(v => this.memoizedVisits.push(new Visit(v)))
            this.collectVisitedParks()
        } catch(err) {
            this.handleError(err)
        }
    }

    get is_authenticated() {
        return !!this.profileAdapter.token
    }

    get staticHTML() {
        if (this.is_authenticated) {   
            return (`
                <button type="button" id="logout-btn" class="btn btn-primary btn-block btn-md">Logout</button>
            `)
        }
    }

    handleLogout(e) {
        e.preventDefault()
        // console.log('handling logout???')
        this.redirect('login')
        this.profileAdapter.token = null
        // console.log(this.profileAdapter.token)
    }

    renderUser() {
        this.container.innerHTML = this.user.profileHTML
    }

    renderParks() {
        this.parksContainer.innerHTML = this.memoizedParks.map(p => p.parkCardHTML).join('')
    }

    collectVisitedParks() {
        const visitIDs = this.memoizedVisits.map(v => v.park_id)
        for (let id of visitIDs) {
            this.visitedParks.push(this.memoizedParks.find(p => p.id == id)
            )}
        this.renderVisitedParks()
        // this.removeParksFromDiv()
    }

    renderVisitedParks() {
        this.visitsContainer.innerHTML = this.visitedParks.map(v => v.visitedParkCardHTML).join('')
    }

    // Move to rendered parks after working???
    // removeParksFromDiv() {
    //     const visitIDs = this.memoizedVisits.map(v => v.park_id) 
    //     for (let id of visitIDs) {
    //         const removeParks  = this.memoizedParks.filter(p => p.id == id)
    //         for (let p of removeParks) {
                
    //         }
    //     }
    // }


}