class DirectoryPage {

  menuDirectory() {
    return cy.contains('Directory')
  }

  searchButton() {
    return cy.get('button[type="submit"]')
  }

  resultCard() {
    return cy.get('.oxd-grid-item')
  }
}

export default new DirectoryPage()