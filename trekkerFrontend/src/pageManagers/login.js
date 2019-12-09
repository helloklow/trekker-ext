class LoginPage extends PageManager { // UPDATE FORM ID'S TO LOGIN!!! TWO CLASSES -> FORM and LOGIN / SIGNUP???
    initBindingsAndEvents() {
        this.form = this.container.querySelector('#login-form')
        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    handleSubmit(e) {
        e.preventDefault()
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const [email, password] = inputs.map(input => input.value)
        const params = {
            user: {
                email, password
            }
        }
        this.loginAdapter.login(params)
    }

    get staticHTML() {
        return (`
        <div id="login-form" class="user-form">	
		<h2>Login</h2>
        <form id="login">
        <div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-paper-plane"></i></span>
				<input type="email" class="form-control" id="email" placeholder="Email" required>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-lock"></i></span>
				<input type="password" class="form-control" id="password" placeholder="Password" required>
			</div>
        </div>       
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-block btn-md">Login</button>
        </div>
        </form>
	    <div class="text-center">New to Trekker? <a href="#">Create an Account</a></div>
        </div>
        `)
    }

}
