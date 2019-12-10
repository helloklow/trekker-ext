class BaseAdapter {
    constructor(baseURL = 'http://localhost:3000') {
        this.baseURL = baseURL
        this.token = null
    }

    get headers() {
        const baseHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if (this.token){
            baseHeaders = {...baseHeaders, 'Authorization': `Bearer ${this.token}`}
        }
        return baseHeaders
    }

    async checkStatus(resp) {
        if (resp.status == 401) { // Not authorized to see resource -> With no URLs, must mean token is blacklisted
            this.token = null // Clear token and throw error
            let msg = await resp.json() // change to const?
            throw {
                type: 'Authorization Error',
                msg: msg.error
            }
        } else if (resp.status < 200 || resp.status > 299) {
            const msg = await resp.json()
            let errorMsg = msg.error.detail
            if (!errorMsg) {errorMsg = msg.error}
            throw {
                type: 'Fetch Error',
                msg: errorMsg
            }
        }
    }

}