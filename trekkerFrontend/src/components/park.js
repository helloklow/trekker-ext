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

    get parkCardHTML() {
        return (`
            <div id='park-card' class='park-card'>
                <h4 class='center-text'>${this.name}</h4>
                <p class='small-text'>${this.location}, est. ${this.est}</p>
                <div id='park-details'> 
                    <img class='park-pic' data-name='${this.name}' data-action='toggle-summary' src='${this.pic}'>
                    <p class='park-summary' data-name='${this.name}' data-action='toggle-summary'>${this.summary}</p>
                <button class='visit-icon' data-name='${this.name}' data-action='visit-icon' alt='Visit'></button>
                </div>                  
            </div>
        `)
    }


}