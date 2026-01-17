class LoginPage {

  username() {
    return cy.get('input[name="username"]')
  }

  password() {
    return cy.get('input[name="password"]')
  }

  loginButton() {
    return cy.get('button[type="submit"]')
  }

  errorMessage() {
    return cy.get('.oxd-alert-content-text')
  }

  login(username, password) {
    if (username !== null) {
      this.username().clear().type(username)
    }
    if (password !== null) {
      this.password().clear().type(password)
    }
    this.loginButton().click()
  }
}

export default new LoginPage()