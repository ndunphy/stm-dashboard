import Auth0Lock from 'auth0-lock'

export default class AuthService {
    constructor(clientId, domain) {
        // Configure Auth0
        this.lock = new Auth0Lock(clientId, domain, {})
        // Add callback for lock 'authenticated' event
        this.lock.on('authenticated', this._doAuthentication.bind(this))
        // Bind login functions to keep this context
        this.login = this.login.bind(this)
    }

    _doAuthentication(authResult) {
        // Save user token
        this.setToken(authResult.idToken)
    }

    login() {
        // Call the show method to display the widget
        this.lock.show()
    }

    loggedIn() {
        // Check if there is a saved valid token
        return !!this.getToken()
    }

    setToken(idToken) {
        // Save user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieve user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token')
    }
}