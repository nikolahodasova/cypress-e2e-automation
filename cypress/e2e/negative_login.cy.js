describe('Negative Login Test', () => {

  it('Login with invalid credentials', () => {
    cy.visit('/login')
    cy.contains('Signup / Login').click()

    cy.get('input[data-qa="login-email"]').type('wrong@test.com')
    cy.get('input[data-qa="login-password"]').type('wrongpass')
    cy.get('button[data-qa="login-button"]').click()

    cy.contains('Your email or password is incorrect!')
  })

})