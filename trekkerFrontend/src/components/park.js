class Park {
    constructor(park) {
        const {id, name, location, est, summary, pic} = park
        this.id = id
        this.name = name
        this.location = location
        this.est = est
        this.summary = summary 
        this.pic = pic
    }

    // Need to fire after parkCardHTML is dynamically rendered
    cardBindingsAndEvents() {
        // this.container = document.querySelector('#page-container')
        // this.card = document.querySelector('#park-card')
        // this.visitIcon = this.card.querySelector('#visit-icon')
        // this.visitIcon.addEventListener
        document.body.addEventListener('click', (e) => {
            if (e.target.class == 'visit-icon') {
                console.log('hello??')
                // this.renderVisitForm.bind(this)
            }
        })
    }

    renderVisitForm(e) {
        console.log('hellooooooooo')
    }

    get parkCardHTML() {
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