class VisitsAdapter {
    constructor(baseAdapter) {
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL 
    }

    // Get at time of call (bc token and headers might change)    
    get token() {
        return this.baseAdapter.token
    }

    get headers() {
        return this.baseAdapter.headers
    }

    async getVisits() {
        const resp = await fetch(`${this.baseURL}/visits`, {
            // headers: {'Accept': 'application/json'}
            headers: this.headers // Get parks with auth token from headers
        })
        await this.baseAdapter.checkStatus(resp)
        return await resp.json()
    }

}

// Can't use render_resource (controller) with index, so this won't correlate park. Likely delete!