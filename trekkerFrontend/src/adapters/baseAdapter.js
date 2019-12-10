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
        // if (resp.status === 401) { // Not authorized to see resource -> Without URLs, must mean token is blacklisted
        //     this.token = null // Clear token 
        //     const msg = await resp.json()
        //     // throw new Error(msg.error.detail) -> returning obj obj***
        //     throw { // This error type is caught in correlating page manager, clears token, and redirects to login
        //         type: 'Authorization Error',
        //         msg: msg.error.details // msg.error???
        //     }
        // } else 
        if (resp.status < 200 || resp.status > 299) {
            const msg = await resp.json()
            let errorMsg = msg.error.detail || msg.error // try msg.errors???
            throw new Error(errorMsg)
            // throw { // This error type is caught and shows error msg
            //     type: 'Fetch Error',
            //     msg: errorMsg
            // }
        }
    }

}