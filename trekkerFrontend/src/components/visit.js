class Visit {
    constructor(visit) {
        const {id, date, notes, user_id, park_id} = visit
        this.visit_id = id
        this.date = date 
        this.notes = notes
        this.user_id = user_id
        this.park_id = park_id
        this.user = visit.user
        this.park = visit.park
        this.visitBindingsAndEvents()
    }

    visitBindingsAndEvents() {
        this.container = document.querySelector('#visits-container')
    }

    // renderVisitForm(e) {
    //     e.preventDefault()
    //     console.log('visit class form')
    // }

    get visitHTML() {
        return (`
            <div id='visit-details'>
                <p class='visit-date' data-id='${this.id}' data-action='toggle-visit'>${this.date}</p>
                <p class='visit-notes' data-id='${this.id}' data-action='toggle-visit'>${this.notes}</p> 
                <button id='delete-btn' class='visit-btn' data-id='${this.id}' data-action='delete-btn' alt='Delete'></button>
                <button id='edit-btn' class='visit-btn' data-id='${this.id}' data-action='edit-btn' alt='edit'></button>
            </div>           
        `)
    }

}

