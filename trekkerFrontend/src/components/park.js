class Park {
    constructor(park) {
        const {id, name, location, est, summary, pic} = park
        this.id = id
        this.name = name
        this.location = location
        this.est = est
        this.summary = summary 
        this.pic = pic
        this.users = park.users
        this.visits = park.visits
        this.cardBindingsAndEvents()
    }

    cardBindingsAndEvents() {
        this.container = document.querySelector('#page-container')
        this.container.onmouseover = this.container.onmouseout = this.toggleSummary
    }

    toggleSummary(e) {
        if (e.target.dataset.action === 'toggle-summary') {
            const img = e.target
            const summary = e.target.parentNode.children[1]
            if (e.type === 'mouseover') {
                img.style.visibility = 'hidden'
                summary.style.visibility = 'visible'
            } else if (e.type === 'mouseout') {
                img.style.visibility = 'visible'
                summary.style.visibility = 'hidden'
            }
        }
    }

    get parkCardHTML() {
        return (`
            <div id='park-card' class='park-card'>
                <h4 class='center-text'>${this.name}</h4>
                <p class='small-text'>${this.location}, est. ${this.est}</p>
                <div id='park-details'> 
                    <img class='park-pic' data-id='${this.id}' data-action='toggle-summary' src='${this.pic}'>
                    <p class='park-summary' data-id='${this.id}' data-action='toggle-summary'>${this.summary}</p>
                </div>                  
            </div>
        `)
    }

}