class User {
    constructor(user) {
        const {id, username, email, visits, parks} = user
        this.id = id
        this.username = username
        this.email = email 
        this.visits = visits.map(v => new Visit(v)) // Make visit objs
        this.parks = parks.map(p => new Park(p)) // Make park objs 
    }

    get profileHTML() {
        return (`
            <h2 class="user-welcome">Welcome, ${this.username}</h2>
        `)
    }

}