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

    get profileHTML() {
        // console.log(this.userVisits)
        // console.log(this.userParks)
        return (`
            <h2 class="welcome">Welcome, ${this.username}</h2><br><br>
            ${this.visits.map(v => v.renderVisitCards).join('')}
        `)
    }


}