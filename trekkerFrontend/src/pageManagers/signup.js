class SignupPage extends PageManager {
    constructor(container, adapter) {
        super(container)
        this.adapter = new SignupAdapter(adapter) // Set up adapter for itself
    }
    
    initBindingsAndEvents() {
        this.form = this.container.querySelector('#signup-form')
        this.loginLink = this.container.querySelector('a#login')

        this.form.addEventListener('submit', this.handleSubmit.bind(this))
        this.loginLink.addEventListener('click', this.handleLogin.bind(this))
    }

    handleLogin(e) {
        e.preventDefault()
        this.redirect('login')
        
    }

    async handleSubmit(e) {
        e.preventDefault()
        const [username, email, password] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
        const params = {
            user: {
                username, email, password
            }
        }
        try {
            await this.adapter.signup(params) // If this works, redirect to...
            this.redirect('profile')
        } catch(err) {
            this.handleError(err) // If it doesn't work, error
        }
    }

    get staticHTML() {
        return (`
            <h3 class="welcome">Welcome, Trekker</h3>
            <h4 class="welcome">Sign up to track your National Park adventures.</h4>
            <div id="signup-form" class="user-form">	
            <form id="signup">
            <h2>Create Account</h2>
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
	        <div class="text-center">Already have an account? <a href="#" id="login">Login here</a></div>
            </div>
        `)
    }

}
