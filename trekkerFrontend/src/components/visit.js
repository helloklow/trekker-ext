class Visit {
    constructor(visit) {
        const {id, active, user_id, park_id} = visit
        this.id = id
        this.active = active
        this.park_id = park_id
        this.user_id = user_id
    }

    get visitCardHTML() {
        return (`
            <div id='visit-card' class='visit-card'>
                <h4 class='center-text'>${this.name}</h4>
                <p class='small-text'>${this.location}, est. ${this.est}</p>
                <div id='park-details'> 
                    <img class='park-pic' data-name='${this.name}' data-action='toggle-summary' src='${this.pic}'>
                    <p class='visit-summary' data-name='${this.name}' data-action='toggle-summary'>${this.summary}</p>
                <button class='visited-icon' data-name='${this.name}' data-action='visit-icon' alt='Visit'></button>
                <button class='remove-btn' data-name='${this.name}' data-action='remove-btn' alt='Remove'></button>
                </div>                  
            </div>
        `)
    }


}