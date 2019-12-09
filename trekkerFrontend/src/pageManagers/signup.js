class SignupPage extends PageManager {
    initBindingsAndEvents() {
        this.form = this.container.querySelector('#signup-form')
        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    handleSubmit(e) {
        e.preventDefault()
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const [username, email, password] = inputs.map(input => input.value)
        const params = {
            user: {
                username, email, password
            }
        }
        this.adapter.signup(params)
    }

    get staticHTML() {
        return (`
        <div id="signup-form" class="user-form">	
		<h2>Create Account</h2>
        <form id="signup">
        <div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-user"></i></span>
				<input type="username" class="form-control" id="username" placeholder="Username" required>
			</div>
        </div>
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
            <button type="submit" class="btn btn-primary btn-block btn-md">Sign Up</button>
        </div>
        </form>
	    <div class="text-center">Already have an account? <a href="#">Login here</a></div>
        </div>
        `)
    }

}
