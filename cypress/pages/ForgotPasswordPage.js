class ForgotPasswordPage {

  forgotLink() {
    return cy.contains('Forgot your password?')
  }

  usernameInput() {
    return cy.get('input[name="username"]')
  }

  resetButton() {
    return cy.get('button[type="submit"]')
  }
}

export default new ForgotPasswordPage()