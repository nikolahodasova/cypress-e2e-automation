describe('User flow', () => {

  it('Login flow', () => {
    cy.visit('/login')

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button').click()

    cy.url().should('include', '/secure')
  })

})
