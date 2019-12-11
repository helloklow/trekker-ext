class ProfileAdapter {
    // Get at time of instantiation
    constructor(baseAdapter) {
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL 
    }

    // Get at time of call (bc token and headers might change)    
    get token() {
        return this.baseAdapter.token
    }

    set token(nullifyToken) {
        this.baseAdapter.token = nullifyToken
    }

    get headers() {
        return this.baseAdapter.headers
    }

    async getUser() {
        const resp = await fetch(`${this.baseURL}/profile`, {
            // headers: {'Accept': 'application/json'}
            headers: this.headers // Get dogs with auth token from headers
        })
        await this.baseAdapter.checkStatus(resp)
        return await resp.json()
    }
    

}