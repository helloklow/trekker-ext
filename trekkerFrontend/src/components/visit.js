class Visit { // extends User
    constructor(visit) {
        // super(username, parks)
        const {id, date, notes, user_id, park_id} = visit
        this.visit_id = id
        this.date = date 
        this.notes = notes
        this.park_id = park_id
        this.user_id = user_id
        this.visitBindingsAndEvents()
    }

    visitBindingsAndEvents() {
        this.container = document.querySelector('#page-container')
    }

    get visitDetailsHTML() {
        console.log('visit details')
        // return (`
        //     <div id='visit-details'> 
        //         <p class='visit-date' data-id='${this.id}' data-action='toggle-visit'>${this.date}</p>
        //         <p class='visit-notes' data-id='${this.id}' data-action='toggle-visit'>${this.notes}</p>
        //         <button class='visited-icon' data-id='${this.id}' data-action='visited-icon' alt='Visited'></button>
        //         <button class='remove-btn' data-id='${this.id}' data-action='remove-btn' alt='Remove'></button>
        //     </div>                  
        // `)
    }

    // Need to get visited parks to display park info in visited cards!
    get visitHTML() {
        return (`
            <div id='visit-details'>
                <p class='visit-date' data-id='${this.id}' data-action='toggle-visit'>${this.date}</p>
                <p class='visit-notes' data-id='${this.id}' data-action='toggle-visit'>${this.notes}</p> 
                <button class='edit' data-id='${this.id}' data-action='edit-btn' alt='edit'>Edit</button>
                <button class='remove' data-id='${this.id}' data-action='remove-btn' alt='Remove'>Remove</button>
                <br><br><br><br> 
            </div>           
        `)
    }

}

{/* ADD REMOVE AND EDIT BUTTONS
<button class='remove-btn' data-id='${this.id}' data-action='remove-btn' alt='Remove'></button> */}