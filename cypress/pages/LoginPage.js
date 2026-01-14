class LoginPage {

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  inputUsername(username) {
    if (username !== null) {
      cy.get('input[name="username"]').type(username);
    }
  }

  inputPassword(password) {
    if (password !== null) {
      cy.get('input[name="password"]').type(password);
    }
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  doubleClickLogin() {
    cy.get('button[type="submit"]').dblclick();
  }

  assertLoginSuccess() {
    cy.url().should('include', '/dashboard');
  }

  assertInvalidCredentials() {
    cy.contains('Invalid credentials').should('be.visible');
  }

  assertRequiredField() {
    cy.contains('Required').should('be.visible');
  }
}

export default new LoginPage();