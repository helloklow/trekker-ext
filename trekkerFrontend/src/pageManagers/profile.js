class ProfilePage extends PageManager {
    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter) // Set up adapter for itself
        // this.user = null
    }

    initBindingsAndEvents() {
        return null
    }

    get staticHTML() {
        return (`
        <h2 class="welcome">Welcome, user</h2>
        `)
    }

}