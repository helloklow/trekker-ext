class Visit {
    constructor(visit) {
        const {id, active, user_id, park_id} = visit
        this.id = id
        this.active = active
        this.park_id = park_id
        this.user_id = user_id
    }

    // Need to get visited parks to display park info in visited cards!

    get visitCardHTML() {
        return (`
            <div id='visit-card' class='visit-card'>
                <h4 class='center-text'>${this.name}</h4>
                <p class='small-text'>${this.location}, est. ${this.est}</p>
                <div id='visit-details'> 
                    <p class='visit-active' data-id='${this.id}' data-action='toggle-visit'>${this.active}</p>
                    <p class='visit-date' data-id='${this.id}' data-action='toggle-visit'>${this.date}</p>
                    <p class='visit-notes' data-id='${this.id}' data-action='toggle-visit'>${this.notes}</p>
                <button class='visited-icon' data-id='${this.id}' data-action='visited-icon' alt='Visited'></button>
                <button class='remove-btn' data-id='${this.id}' data-action='remove-btn' alt='Remove'></button>
            </div>                  
            </div>
        `)
    }


}

{/* ADD BACK IN PARK PIC / SUMMARY TOGGLE
<img class='park-pic' data-name='${this.name}' data-action='toggle-summary' src='${this.pic}'>
<p class='visit-summary' data-name='${this.name}' data-action='toggle-summary'>${this.summary}</p> */}