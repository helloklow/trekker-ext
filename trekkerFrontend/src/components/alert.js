class Alert {
    constructor(container) {
        this.container = container
    }

    stopAlert() {
        clearTimeout(this.timeout)
    }

    render(msg, type, timeout) {
        const html = `
        <div class="alert alert-${type}" role="alert">
            ${msg}
        </div>
        `
        this.timeout = setTimeout(() => {
            this.container.innerHTML = html
        }, timeout)
    }


}