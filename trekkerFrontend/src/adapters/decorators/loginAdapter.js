class LoginAdapter {
    // Get at time of instantiation
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

    // Perform login correctly
    async login(params){
        const resp = await fetch(`${this.baseURL}/login`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(params)
        })
        await this.baseAdapter.checkStatus(resp) // Either get error
        this.baseAdapter.token = resp.headers.get('authorization').split(' ')[1] // Or set base's token
    }

}