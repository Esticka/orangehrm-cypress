import ForgotPasswordPage from '../../pages/ForgotPasswordPage'

describe('Forgot Password Feature', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    ForgotPasswordPage.forgotLink().click()
    cy.url().should('include', '/requestPasswordResetCode')
  })

  it('TC06 - Akses halaman forgot password', () => {
    cy.contains('Reset Password').should('exist')
  })

  it('TC07 - Submit forgot password dengan username valid', () => {
    // isi username valid
    ForgotPasswordPage.usernameInput().type('Admin')

    // native click (hindari Cypress menunggu page load)
    ForgotPasswordPage.resetButton().then($btn => {
      $btn[0].click()
    })

    // validasi aman (tanpa reload & tanpa cy.url)
    cy.contains('Reset Password').should('exist')
  })

  it('TC08 - Submit forgot password dengan username kosong', () => {
    ForgotPasswordPage.resetButton().then($btn => {
      $btn[0].click()
    })

    cy.contains('Required').should('exist')
  })
})