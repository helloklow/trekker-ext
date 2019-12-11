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
            this.token = null
            // console.log(msg.error) // Shows correct error! 
            let errorMsg = msg.error.value
            if (!errorMsg) {errorMsg = msg.error}
            throw new Error(errorMsg)
        } else if (resp.status < 200 || resp.status > 299) {
            const msg = await resp.json()
            let errorMsg = msg.error.detail
            if (!errorMsg) {errorMsg = msg.error}
            throw new Error(errorMsg)
        }
        console.log(resp.status)
    }

} 