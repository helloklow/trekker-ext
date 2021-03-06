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

    async addVisit(params){
        const resp = await fetch(`${this.baseURL}/visits`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(params)
        })
        await this.baseAdapter.checkStatus(resp) // Get error, if any
    }

}