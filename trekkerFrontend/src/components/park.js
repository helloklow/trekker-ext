class Park {
    constructor(park) {
        const {id, name, location, est, summary, pic} = park
        this.id = id
        this.name = name
        this.location = location
        this.est = est
        this.summary = summary 
        this.pic = pic
        this.cardBindingsAndEvents()
    }

    // Need to fire after parkCardHTML is dynamically rendered
    cardBindingsAndEvents() {
        this.container = document.querySelector('#page-container')
        this.container.addEventListener('click', (e) => {
            if (e.target && e.target.className === 'visit-icon') {
                this.handleClick(e)
            }
        })
        this.container.onmouseover = this.container.onmouseout = this.toggleSummary
    }

    handleClick(e) {
        e.preventDefault()
        e.stopImmediatePropagation()
        console.log(e.target.dataset.id)
        // How do I render visit form?
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
                <button class='visit-icon' data-id='${this.id}' data-action='visit-icon' alt='Visit'></button>
                </div>                  
            </div>
        `)
    }

    get visitedParkCardHTML() {
        return (`
            <div id='visit-card' class='visit-card'>
                <h4 class='center-text'>${this.name}</h4>
                <p class='small-text'>${this.location}, est. ${this.est}</p>
                <div id='visit-details'> 
                    <button class='visited-icon' data-id='${this.id}' data-action='visited-icon' alt='Visited'></button>
                    <button class='remove-btn' data-id='${this.id}' data-action='remove-btn' alt='Remove'></button>
                </div>                  
            </div>
        `)
    }

}