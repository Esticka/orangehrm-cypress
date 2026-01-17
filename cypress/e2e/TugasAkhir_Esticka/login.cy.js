import LoginPage from '../../pages/LoginPage'

describe('Login Feature', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })

  it('TC01 - Login berhasil', () => {
    cy.intercept('POST', '**/auth/validate').as('loginAPI')

    LoginPage.login('Admin', 'admin123')

    cy.wait('@loginAPI')
      .its('response.statusCode')
      .should('be.oneOf', [200, 302])

    cy.url().should('include', '/dashboard')
  })

  it('TC02 - Login gagal password salah', () => {
    LoginPage.login('Admin', 'salah123')
    LoginPage.errorMessage().should('contain', 'Invalid credentials')
  })

  it('TC03 - Login gagal username salah', () => {
    LoginPage.login('adminx', 'admin123')
    LoginPage.errorMessage().should('contain', 'Invalid credentials')
  })

  it('TC04 - Login gagal username kosong', () => {
    LoginPage.login(null, 'admin123')
    cy.contains('Required').should('exist')
  })

  it('TC05 - Login gagal password kosong', () => {
    LoginPage.login('Admin', null)
    cy.contains('Required').should('exist')
  })
})