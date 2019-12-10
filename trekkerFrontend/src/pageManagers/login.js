class LoginPage extends PageManager {
    constructor(container, adapter) {
        super(container)
        this.adapter = new LoginAdapter(adapter) // Set up adapter for itself
    }

    initBindingsAndEvents() {
        this.form = this.container.querySelector('#login-form')
        this.signupLink = this.container.querySelector('a#signup')
    
        this.form.addEventListener('submit', this.handleSubmit.bind(this))
        this.signupLink.addEventListener('click', this.handleSignup.bind(this))
    }

    handleSignup(e) {
        e.preventDefault()
        this.redirect('signup')
    }

    async handleSubmit(e) {
        e.preventDefault()
        const [email, password] = Array.from(e.target.querySelectorAll('input')).map(i => i.value) // Grab inputs in arr and map value
        const params = {
            user: {email, password}
        }
        try {
            await this.adapter.login(params) // If this works, redirect to...
            this.redirect('signup')
        } catch(err) {
            alert(err) // If it doesn't work, error
        }
    }

    get staticHTML() {
        return (`
        <h3 class="welcome">Welcome back, Trekker!</h3>
        <h4 class="welcome">Login to add your latest adventure.</h4>  
        <div id="login-form" class="user-form">	
        <form id="login">
        <h2>Login</h2>
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
	    <div class="text-center">New to Trekker? <a href="#" id="signup">Create an Account</a></div>
        </div>
        `)
    }

}
