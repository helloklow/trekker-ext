class BaseAdapter {
    constructor(baseURL = 'http://localhost:3000') {
        this.baseURL = baseURL
        this.token = null
    }

    get headers() {
        let baseHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if (this.token){
            baseHeaders = {...baseHeaders, 'Authorization': `Bearer ${this.token}`}
        }
        return baseHeaders
    }

    async checkStatus(resp) {
        if (resp.status == 401) {
            const msg = await resp.json()
            // console.log(this.token) -> Already null, no need to set?
            throw new Error(msg.error)
        } else if (resp.status < 200 || resp.status > 299) {
            const msg = await resp.json()
            let errorMsg = msg.error.detail
            if (!errorMsg) {errorMsg = msg.error}
            throw new Error(errorMsg)
        }
    }

}