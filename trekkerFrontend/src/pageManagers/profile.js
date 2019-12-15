class ProfilePage extends PageManager {
    constructor(container, visitsContainer, parksContainer, adapter) {
        super(container, visitsContainer, parksContainer)
        this.profileAdapter = new ProfileAdapter(adapter) // Set up adapter for itself
        this.user = null
        this.parksAdapter = new ParksAdapter(adapter)
        this.memoizedParks = []
        this.visitsAdapter = new VisitsAdapter(adapter)
        this.memoizedVisits = []
        // this.visitedParks = []
    }

    initBindingsAndEvents() {
        this.visitsContainer.style.visibility = 'visible'
        this.logoutBtn.addEventListener('click', this.handleLogout.bind(this))
    }

    visitFormBindingsAndEvents(form) {
        this.visitDate = document.querySelector('#visit-date')
        this.visitNotes = document.querySelector('#visit-notes')
        form.addEventListener('submit', this.addVisit.bind(this))
    }

    async addVisit(e) { // async? --> ADD PARK NAME IF ADDED TO DB SCHEAMA!!!!
        e.preventDefault()
        const date = this.visitDate.value 
        const notes = this.visitNotes.value
        const params = {
            visit: {
                date, notes
            }
        } 
        try {
            await this.visitsAdapter.addVisit(params)
            console.log('visit added')
        } catch(err) {
            this.handleError(err)
        }
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
            this.renderVisits() // this.collectVisits()
        } catch(err) {
            this.handleError(err)
        }
    }

    get is_authenticated() {
        return !!this.profileAdapter.token
    }

    get staticHTML() {
        this.logoutBtn = document.querySelector('#logout-btn')
        this.form = document.querySelector('#add-visit-form')
        this.visitFormBindingsAndEvents(this.form)
        if (this.is_authenticated) {
            this.logoutBtn.style.visibility="visible"
            this.form.style.visibility="visible"
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

    // collectVisits() {
    //     const visitIds = this.memoizedVisits.map(v => v.park_id)
    //     for (let id of visitIds) {
    //         this.visitedParks.push(this.memoizedParks.find(p => p.id == id)
    //         )}
    //     this.visitsContainer.style.visibility = 'visible'
    //     this.renderVisits()
    // }

    renderVisits() {
        this.visitsContainer.innerHTML = this.memoizedVisits.map(v => v.visitHTML).join('')
    }

    handleLogout(e) {
        e.preventDefault()
        this.profileAdapter.token = null
        this.redirect('login')
        location.reload()
        // console.log(this.profileAdapter.token)
    }

    // visitForm(e) {
    //     e.preventDefault()
    //     // const visit = this.memoizedVisits
    //     // this.visitsContainer.innerHTML = visit.renderVisitForm
    //     this.visitsContainer.innerHTML = (`
        // <div id="add-visit-form>
        // <form id="add-visit-form class="add-visit-form">
        //     <div class="form-row">
        //     <div class="form-group col-md-4">
        //     <select id="input-park" class="form-control">
        //     </select>
        //     </div>
        //     </div>
        //     <div class="form-row">
        //         <div class="form-group col-md-6">
        //             <input type="date" class="form-control" id="date" placeholder="Date" required>
        //         </div>
        //     </div>
        //     <div class="form-row">
        //         <div class="form-group col-md-6">
        //             <textarea class="form-control" id="notes" rows="3" placeholder="Notes" required></textarea>
        //         </div>
        //     </div>
        //    <button type="submit" id="submit-btn" class="btn btn-primary">Submit</button>
        // </form>
        // </div>
    //     `)
    //     // const form = document.getElementById('add-visit-form')
    //     // console.log(form)
    //     // this.parkOptions()
    //     // this.visitFormBindingsAndEvents()
        
    // }

    // parkOptions(form) {
    //     const select = form.querySelector('#input-park')
    //     const options = this.memoizedParks.map(p => p.name)
    //     for (let i = 0; i < options.length; i++) {
    //         let opt = options[i]
    //         console.log(opt)
    //         let el = document.createElement('option')
    //         el.innerText = opt 
    //         el.value = opt 
    //         select.appendChild(el)
    //     }
    // }

}