class Router{
    // Key-value pais for str (url) to page identifier
    constructor(kvpairs) {
        this.routes = kvpairs
    }

    // Set starting page
    set rootPage(rootPageKey) {
        this.rootPage = this.routes[rootPageKey]
    }

    render(page) { // Get the page and render it
        this.routes[page].render()
    }

    // assignRedirect(cb) {
    //     this.assignCallback(cb, 'redirect')
    // }

    assignCallback(cb) { // Router gives every page the cb 'redirect'
        for(let route in this.routes) { // Iterate through keys
            this.routes[route].redirect = cb // Assign cb to each route
        }
    }


}