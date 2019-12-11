class User {
    constructor(user) {
        const {id, username, email, visits, parks} = user
        this.id = id
        this.username = username
        this.email = email 
        this.visits = visits.map(v => new Visit(v))
        this.parks = parks.map(p => new Park(p))
    }

    get profileHTML() {
        return (`
            <h2 class="welcome">Welcome, ${this.username}</h2><br><br>
            ${this.parks.map(p => p.parkCardHTML).join('')}
        `)
    }


}

{/* <div id="visits-container>
                ${this.visits.map(v => v.visitCardHTML).join('')}
            </div>
            <div id="parks-container>
                ${this.parks.map(p => p.parkCardHTML).join('')}
            </div> */}