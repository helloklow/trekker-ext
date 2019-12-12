class User {
    constructor(user) {
        const {id, username, email, visits, parks} = user
        this.id = id
        this.username = username
        this.email = email 
        this.visits = visits.map(v => new Visit(v)) // Make visit objs
        this.parks = parks.map(p => new Park(p)) // Make park objs 
    }

    // Can I use these methods to make visit and park objs available to the visit class?
    get userVisits() {
        return this.visits
    }

    get userParks() {
        return this.parks
    }

    get userVisitsHTML() {
        // console.log(this.userVisits)
        // console.log(this.userParks)
        // console.log(this.visits.map(v => v.park_id))
        // forEach visit -> append park-card with visit info if park_id matches parks.id
        // if (this.visits.park_id === this.parks.id) {
        //     console.log(this.visits[1])
        //     this.visits.forEach(p => p.renderVisitCards(p)).join('')
        // }
        return (`
            <h2 class="welcome">Welcome, ${this.username}</h2><br><br>
            ${this.visits.map(v => v.renderVisitCards).join('')}
        `)
    }
 

}

// INSTEAD OF RENDERING OVER PARK CARDS:
    // hiker icon redirects to visit form (show park name on form page?)
    // 'submit' form creates 'my visit' btn, remove btn, renders hiker icon green -> redirects to profile
    // OR 'my visit' has edit and remove btns?

// <h2 class="welcome">Welcome, ${this.username}</h2><br><br>