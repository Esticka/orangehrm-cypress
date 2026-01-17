import LoginPage from '../../pages/LoginPage'
import DirectoryPage from '../../pages/DirectoryPage'

describe('Directory Feature', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    LoginPage.login('Admin', 'admin123')
    cy.url().should('include', '/dashboard')
    DirectoryPage.menuDirectory().click()
  })

  it('TC09 - Akses menu Directory', () => {
    cy.url().should('include', '/directory')
  })

  it('TC10 - Search directory tanpa filter', () => {
    DirectoryPage.searchButton().click()
    DirectoryPage.resultCard().should('exist')
  })

  it('TC11 - Data directory tampil', () => {
    DirectoryPage.resultCard().its('length').should('be.greaterThan', 0)
  })

  it('TC12 - Tetap di halaman directory setelah search', () => {
    DirectoryPage.searchButton().click()
    cy.url().should('include', '/directory')
  })
})