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
            <h2 class="welcome">Welcome, ${this.username}</h2><br><br>
        `)
    }

    get visitCardHTML() {
        return (`
            <div id='park-card' class='park-card'>
                <h4 class='center-text'>${this.name}</h4>
                <p class='small-text'>${this.location}, est. ${this.est}</p>
                <div id='park-details'> 
                    <img class='park-pic' data-id='${this.id}' data-action='toggle-summary' src='${this.pic}'>
                    <p class='park-summary' data-id='${this.id}' data-action='toggle-summary'>${this.summary}</p>
                <button class='visit-icon' data-id='${this.id}' data-action='visit-icon' alt='Visit'></button>
                </div>                  
            </div>
        `)
    }
 

}

// ${this.visits.map(v => v.renderVisitCards).join('')}

// INSTEAD OF RENDERING OVER PARK CARDS:
    // hiker icon redirects to visit form (show park name on form page?)
    // 'submit' form creates 'my visit' btn, remove btn, renders hiker icon green -> redirects to profile
    // OR 'my visit' has edit and remove btns?

// <h2 class="welcome">Welcome, ${this.username}</h2><br><br>