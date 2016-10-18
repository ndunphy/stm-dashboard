import Auth0Lock from 'auth0-lock'
import { EventEmitter } from 'events'

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()
    const options = {
      allowedConnections: ['google-oauth2']
    }
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, options)
    // Add callback for lock 'authenticated' event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // Bind login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // Save user token
    this.setToken(authResult.idToken)
    // Async load the user profile data TODO: convert to Promise?
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.error('Error loading the Profile', error)
      } else {
        this.setProfile(profile)
      }
    })
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

  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
    // Trigger profile_updated event
    this.emit('profile_updated', profile)
  }

  getProfile() {
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
  }
}